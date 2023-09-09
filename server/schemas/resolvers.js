

const resolvers = {
    Query: {
        villager: async (parent, { _id }) => {
            return await Villager.findById(_id).populate('crayons');
        },
        villagers: async (parent, { crayons }) => {
            const params = {};

            if (crayons) {
                params.crayons = crayons
            }

            return await Villager.find(params).populate('crayons');
        },
        village: async (parent, { _id }) => {
            return await Village.findById(_id).populate('villagers');
        },
        villages: async () => {
            return await Village.find();
        },
    }
}