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
        request: async (parent, { _id }) => {
            return await Request.findById(_id).populate('comments').populate('response');
        }
    },
    Mutation: {
        addVillager: async (parent, args) => {
            const villager = await Villager.create(args);
            const token = signToken(villager);

            return { token, villager };
        },
        addVillage: async (parent, args) => {
            const village = await Village.create(args);

            return village;
        },
        addRequest: async (parent, args) => {
            const request = await Request.create(args);

            return request;
        },
        updateVillager: async (parent, args, context) => {
            if (context.villager) {
                return await Villager.findByIdAndUpdate(context.villager._id, args, { new: true });
            }

            throw new AuthenticationError('Not logged in');
        },
        updateVillage: async (parent, args, context) => {
            if (context.village) {
                return await Village.findByIdAndUpdate(context.village._id, args, { new: true });
            }
        },
        updateRequest: async (parent, args,) => {
            const token = signToken(Request);
            if (Request) {
                return await Request.findByIdAndUpdate(request._id, args, { new: true });
            }
            return { token }
        },
        login: async (parent, { email, password }) => {
            const villager = await Villager.findOne({ email });

            if (!villager) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const correctPw = await villager.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const token = signToken(villager);

            return { token, villager };
        }
    }
}

module.exports = resolvers;