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
            return await Villager.findById(_id);
        },
        villagers: async () => {
            return await Villager.find();
        },
        village: async (parent, { _id }) => {
            return await Village.findById(_id).populate('villagers').populate('admin');
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

                const village = Village.create({...args, admin: context.user, villagers: [context.user]})
                return village;

            }

            throw new AuthenticationError('Not logged in');

        },
        addRequest: async (parent, args, context) => {

            if (context.user) {

                console.log('args right here', args)

                const request = await Request.create({...args, authorId: context.user, isClaimed: false, isComplete: false });

                await Villager.findByIdAndUpdate(context.user._id, { $push: { requests: request } });

                await Village.findByIdAndUpdate(context.user.village._id,{village: context.user.village._id} );

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
                return await Villager.findByIdAndUpdate(context.user._id, args, { new: true });
            }

            throw new AuthenticationError('Not logged in');
        },
        updateVillage: async (parent, args, context) => {
            if (context.user) {
                return await Village.findByIdAndUpdate(args._id, args, { new: true });
            }

            throw new AuthenticationError('Not logged in')
        },
        updateRequest: async (parent, args, context) => {
            if (context.user) {
                return await Request.findByIdAndUpdate(args._id, args, { new: true });
            }

            throw new AuthenticationError('Not logged in')
        },
        updateComment: async (parent, args, context) => {
            if (context.user) {
                return await Comment.findByIdAndUpdate(args._id, args, {new: true}).populate('authorId');
            }
            // await Comment.populate('authorId');
        },

        joinVillage: async (parent, { _id }, context) => {
            if (context.user) {
                return await Villager.findByIdAndUpdate(context.user._id, { $push: { village: _id} });
            }

            throw new AuthenticationError('Not logged in')
        },
        deleteVillager: async (parent, {_id}) => {
            return Villager.findOneAndDelete({ _id });
        },
        deleteVillage: async (parent, {_id}) => {
            return Village.findOneAndDelete({ _id });
        },
        deleteRequest: async (parent, {_id}) => {
            return Request.findOneAndDelete({ _id });
        },
        deleteComment: async (parent, {_id}) => {
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