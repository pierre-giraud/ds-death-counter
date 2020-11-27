import nextConnect from 'next-connect';

const dbModel = require("../../../db/db");

/*
const handler = nextConnect()
    .get(async (req, res) => {
        // Récupération de tous les boss
        const bossesObj = await dbModel.db['bosses'].findAll();
        const bosses = JSON.stringify(bossesObj);

        res.json(bosses);
        res.statusCode = 200;
    })
    .post(async (req, res) => {
        const { body } = req;
        const { name } = body;

        const newBoss = await dbModel.db["bosses"].create({
            name: name,
        });

        res.json(newBoss);
        res.statusCode = 200;
    });

export default handler;*/

export default function handler(req, res) {
    if (req.method === 'GET'){
        // Récupération de tous les boss
        dbModel.db['bosses'].findAll().then((b) => {
            const bosses = JSON.stringify(b);

            res.status(200).json(bosses);
        }).catch((err) => {
            res.status(err.statusCode).json({});
        });
    } else if (req.method === 'POST'){
        const { body } = req;
        const { name } = body;

        dbModel.db["bosses"].create({
            name: name,
        }).then((b) => {
            const boss = JSON.stringify(b);

            res.status(200).json(boss);
        }).catch((err) => {
            res.status(err.statusCode).json({});
        });
    }
}