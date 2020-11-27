import nextConnect from 'next-connect';

const dbModel = require("../../../db/db");

const handler = nextConnect()
    .get(async (req, res) => {
        // Récupération de tous les joueurs
        console.log("APPEL PLAYERS");
        const playersObj = await dbModel.db['players'].findAll();
        const players = JSON.stringify(playersObj);
        console.log("FIN APPEL PLAYERS");

        res.statusCode = 200;
        res.json(players);
    })
    .post(async (req, res) => {
        const { body } = req;
        const { name } = body;

        const newPlayer = await dbModel.db["players"].create({
            name: name,
        });

        res.statusCode = 200;
        res.json(newPlayer);
    });

export default handler;
