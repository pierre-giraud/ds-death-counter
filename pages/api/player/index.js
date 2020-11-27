import nextConnect from 'next-connect';

const dbModel = require("../../../db/db");

const handler = nextConnect()
    .get(async (req, res) => {
        // Récupération de tous les joueurs
        const playersObj = await dbModel.db['players'].findAll();
        const players = JSON.stringify(playersObj);

        res.json(players);
    })
    .post(async (req, res) => {
        const { body } = req;
        const { name } = body;

        const newPlayer = await dbModel.db["players"].create({
            name: name,
        });

        res.json(newPlayer);
    });

export default handler;
