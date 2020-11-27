import nextConnect from 'next-connect';

const dbModel = require("../../../db/db");

const handler = nextConnect()
    .post(async (req, res) => {
        await dbModel.db.sequelize.sync({force: true});

        /*await dbModel.db["players"].create({
            name: "Foo",
        });

        await dbModel.db["players"].create({
            name: "Foo 2",
        });

        await dbModel.db.sequelize.sync();*/
    });

export default handler;