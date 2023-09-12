const db = require('./connection');
const { Comment, Request, Village, Villager } = require('../models');

db.once('open', async () => {
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

    console.log('Villagers seeded');

    //delete all pre-existing comments
    await Comment.deleteMany();

    const comments = await Comment.create([
        {
            body: "I got you!",
            authorId: villagers[1]._id,
            // requestId: request[0]._id,
        }
    ])

    console.log('Comments seeded');
    
        //delete all pre-existing requests
        await Request.deleteMany();
    
        const request = await Request.create([
            {
                title: "Carpool Request - Tuesday",
                body: "I need someone to drop Kevin and Sara off at school on Tuesday",
                crayons: 2,
                authorId: villagers[0]._id,
                isComplete: false,
                isClaimed: true,
                comments: comments[0]._id,
                response: {
                    claimId: villagers[1]._id,
                }
            }
        ])
    
        console.log('Request seeded');

    //delete all pre-existing villages
    await Village.deleteMany();

    const village = await Village.create([
        {
            name: "Big Village",
            zipcode: 44608,
            admin:
                villagers[0]._id,
            // villagers:
            //     [
            //         villagers[0]._id,
            //         villagers[1]._id,
            //     ],
            requests:
                [
                    request[0]._id
                ]
        }
    ]);

    console.log('Village seeded');

    console.log('Seeds Completed!!');
    process.exit();
});