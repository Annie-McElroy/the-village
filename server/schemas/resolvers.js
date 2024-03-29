const { AuthenticationError } = require('apollo-server-express');
const { Comment, Request, Village, Villager } = require('../models');
const { signToken } = require('../utils/auth')

// api key required from stripe account
// const stripe = require('stripe')('sk_test_51No9cQIuHUltsfZp85aTl9r2Dj0uPofFAVKO30aBrmloFqZBwockjnhjkrsxMMk0l3TNa5wQmpc2ROCsZdRBFlSI003MfzzWx7')
// importing Elements and loadStripe to run stripes and pull from .json file
// import { Elements } from '@stripe/react-stripe-js';
// import { loadStripe } from '@stripe/stripe-js';
// api key to run loadStripe
// const stripePromise = loadStripe('pk_test_51No9cQIuHUltsfZpgeRZIYz3EEViwvfEqXDZz05Bl2pGmcw9GtVaTtwQEsOVJDAimwZQP7QqtU3vPAzjSU62ByeB00wdPTcawS');

const resolvers = {
    Query: {
        villager: async (parent, { _id }) => {
            return await Villager.findById(_id).populate('requests').populate('village');
        },
        villagers: async () => {
            return await Villager.find();
        },
        village: async (parent, { _id }) => {
            return await Village.findById(_id).populate('villagers').populate('admin').populate('requests').populate({
                path: 'requests',
                populate: 'authorId'
            });
        },
        villages: async () => {
            return await Village.find().populate('villagers').populate('admin');
        },
        requests: async () => {
            return await Request.find().populate('authorId').populate({
                path: 'response',
                populate: 'claimId'
            });
        },
        request: async (parent, { _id }) => {
            return await Request.findById(_id).populate('authorId').populate({
                path: "comments",
                populate:"authorId"
            }).populate({
                path: 'response',
                populate: 'claimId'
            });
        },
        comment: async (parent, { _id }) => {
            return await Comment.findById(_id).populate('authorId').populate('requestId');
        },
        comments: async () => {
            return await Comment.find().populate('authorId').populate('requestId');
        }
    },
    Mutation: {
        addVillager: async (parent, args) => {
            const user = await Villager.create(args);
            const token = signToken(user);

            return { token, user };
        },

        addVillage: async (parent, args, context) => {

            if (context.user) {

                const village = await Village.create({...args, admin: context.user, villagers: [context.user]})

                await village.populate('admin');
                
                return village;
            }

            throw new AuthenticationError('Not logged in');

        },
        addRequest: async (parent, { title, body, crayons, village}, context) => {

            if (context.user) {

                // console.log('args right here', args)

                const request = await Request.create({...{title, body, crayons}, authorId: context.user, isClaimed: false, isComplete: false });

                await request.populate('authorId');

                
                // console.log('user info', context.user)
                await Villager.findByIdAndUpdate(context.user._id, { $addToSet: { requests: request } }, { new: true }).populate('village');
                
                
                // console.log('new request id', request._id)
                // console.log('village id', context.user.village)

                await Village.findByIdAndUpdate(village, { $push: { requests: request._id } }, { new: true });

                return request;
            }

            throw new AuthenticationError('Not logged in');

        },
        addComment: async (parent, args, context) => {
            if (context.user) {
                const comment = await Comment.create({...args, authorId: context.user});

                // Cant not get authorId to show first time.
                await comment.populate('authorId');

                await Request.findByIdAndUpdate(args.requestId, { $addToSet: {comments: comment }},{new: true});

                return comment;
            }
        },

        updateVillager: async (parent, args, context) => {
            if (context.user) {
                return await Villager.findByIdAndUpdate({_id: context.user._id}, args, { new: true });
            }

            throw new AuthenticationError('Not logged in');
        },
        updateVillage: async (parent, args, context) => {
            if (context.user) {
                return await Village.findByIdAndUpdate(args._id, args, { new: true });
            }

            throw new AuthenticationError('Not logged in');
        },
        updateRequest: async (parent, args, context) => {
            if (context.user) {
                return await Request.findByIdAndUpdate(args._id, args, { new: true });
            }

            throw new AuthenticationError('Not logged in');
        },
        updateComment: async (parent, args, context) => {
            if (context.user) {
                return await Comment.findByIdAndUpdate(args._id, args, {new: true}).populate('authorId');
            }
            // await Comment.populate('authorId');
        },

        joinVillage: async (parent, { village }, context) => {
            if (context.user) {

                const villager = await Villager.findByIdAndUpdate(context.user._id, { $addToSet: { village: village } }, { new: true }).populate('village');

                await Village.findByIdAndUpdate(village, { $addToSet: { villagers: context.user._id} }, { new: true });


                return villager;
            }

            throw new AuthenticationError('Not logged in')
        },
        deleteVillager: async (parent, {_id}) => {

            const villager = await Villager.findById(_id).populate('village')

            const villageId = villager.village[0]._id;

            // Array of ids
            const villagerReqs = villager.requests;

            await Village.findOneAndUpdate({_id: villageId}, { $pullAll: { requests: villagerReqs } });

            await Request.deleteMany({authorId: _id});

            return Villager.findOneAndDelete({ _id });
        },
        deleteVillage: async (parent, {_id}) => {
            return Village.findOneAndDelete({ _id });
        },
        deleteRequest: async (parent, { _id }) => {

            const request = await Request.findById({ _id });
            
            // Find villager by authorId and pull request based on _id
            await Villager.findOneAndUpdate({ requests: _id }, { $pull: { requests: _id } }, { new: true });

            // Find village from villager info and pull request based on _id
            await Village.findOneAndUpdate({ requests: _id }, { $pull: { requests: _id } }, { new: true });

            // Find and delete many comments from Request comments array
            await Comment.deleteMany({ _id: { $in: request.comments } });

            return Request.findOneAndDelete({ _id });
        },
        deleteComment: async (parent, {_id}) => {
            
            // Find request
            await Request.findOneAndUpdate({ comments: _id }, { $pull: { comments: _id } }, { new: true })
            
            return Comment.findOneAndDelete({ _id });
        },
        login: async (parent, { email, password }) => {
            const user = await Villager.findOne({ email });

            if (!user) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError('Incorrect credentials');                
            }

            const token = signToken(user);

            return { token, user };
        }
    }
}

module.exports = resolvers;