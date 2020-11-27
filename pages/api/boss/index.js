import nextConnect from 'next-connect';

const dbModel = require("../../../db/db");

const handler = nextConnect()
    .get(async (req, res) => {
        // Récupération de tous les joueurs
        const bossesObj = await dbModel.db['bosses'].findAll();
        const bosses = JSON.stringify(bossesObj);

        res.json(bosses);
    })
    .post(async (req, res) => {
        const { body } = req;
        const { name } = body;

        const newBoss = await dbModel.db["bosses"].create({
            name: name,
        });

        res.json(newBoss);
    });

export default handler;