import nextConnect from 'next-connect';

const dbModel = require("../../../../db/db");

const handler = nextConnect()
    .get(async (req, res) => {
        const { query : {playerId, bossId} } = req;

        const battleObj = await dbModel.db['battles'].findOne({
            where: {
                playerId: playerId,
                bossId: bossId
            }
        });

        if (battleObj === null){
            console.log("No battle found");
            res.json({deaths: 0});
        } else {
            const battle = JSON.stringify(battleObj);
            res.json(battle);
        }
    });

export default handler;