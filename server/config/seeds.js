const db = require('./connection');
const { Comment, Request, Village, Villager } = require('../models');

db.once('open', async () => {
    //delete all pre-existing comments
    // await Comment.deleteMany();

    // const comment = await Comment.insertMany([

    // ])

    //delete all pre-existing requests
    // await Request.deleteMany();


    //delete all pre-existing villages
    await Village.deleteMany();

    const village = await Village.create([
        {
            name: "Big Village",
            zipcode: 44608,
            admin: 
                villagers[0]._id,
            villagers:
                [
                    villagers[0]._id,
                    villagers[1]._id,
                ]
        }
    ]);

    console.table(village);

    //delete all pre-existing villagers
    await Villager.deleteMany();

    const villagers = await Villager.insertMany([
        {
            username: "shaqattack",
            email: "shaqattack@hotmail.com",
            password: "password",
            firstName: "Shaq",
            lastName: "Williams",
            zipcode: 44608,
            crayons: {
                amount: 4 
            },
        },
        {
            username: "yoyo",
            email: "yoyoyael@hotmail.com",
            password: "password",
            firstName: "Yael",
            lastName: "Iffaut",
            zipcode: 44608,
            crayons: {
                amount: 6 
            },
        },
    ]);

    console.table(villagers)
    process.exit();
});