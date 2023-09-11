const { AuthenticationError } = require('apollo-server-express');
const { Comments, Crayon, Request, Response, Village, Villager } = require('../models');
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
        }
    },
    Mutation: {
        addVillager: async (parent, args) => {
            const user = await Villager.create(args);
            const token = signToken(user);

            return { token, user };
        },

        addVillage: async (parent, args, context) => {

            console.log(context)

            if (context.user) {

                const village = Village.create({...args, admin: context.user, villagers: [context.user]})
                return village;

            }

            throw new AuthenticationError('Not logged in');

        },
        addRequest: async (parent, args) => {
            const request = await Request.create(args);

            return request;
        },
        updateVillager: async (parent, args, context) => {
            if (context.user) {
                return await Villager.findByIdAndUpdate(context.user._id, args, { new: true });
            }

            throw new AuthenticationError('Not logged in');
        },
        updateVillage: async (parent, args, context) => {
            if (context.village) {
                return await Village.findByIdAndUpdate(context.village._id, args, { new: true });
            }
        },
        updateRequest: async (parent, args, context) => {
            if (context.request) {
                return await Request.findByIdAndUpdate(contest.request._id, args, { new: true });
            }
        },
        login: async (parent, { email, password }) => {
            const user = await Villager.findOne({ email });

            if (!user) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                console.log('password is actually "' + password + '"')
                console.log('this.password is actually "' + this.password + '"')
                throw new AuthenticationError('Incorrect credentials - password');
                
            }

            const token = signToken(user);
            console.log('This is the villager ' + user)

            return { token, user };
        }
    }
}

module.exports = resolvers;