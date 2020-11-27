import nextConnect from 'next-connect';

const dbModel = require("../../../db/db");

const handler = nextConnect()
    .get(async (req, res) => {
        const playerObj = await dbModel.db['players'].findAll({
            where: {
                name: req.query.playerName
            }
        });

        const player = JSON.stringify(playerObj);
        res.statusCode = 200;
        res.json(player);
    });

export default handler;