import nextConnect from 'next-connect';

const dbModel = require("../../../db/db");

const handler = nextConnect()
    .get(async (req, res) => {
        const bossObj = await dbModel.db['bosses'].findAll({
            where: {
                name: req.query.bossName
            }
        });

        const boss = JSON.stringify(bossObj);
        res.json(boss);
        res.statusCode = 200;
    });

export default handler;