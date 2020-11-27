import nextConnect from 'next-connect';

const dbModel = require("../../../db/db");

const handler = nextConnect()
    .post(async (req, res) => {
        const { body : {playerId, bossId, deaths} } = req;

        const battle = await dbModel.db["battles"].findOne({
            where: {
                playerId: playerId,
                bossId: bossId
            },
        });

        // Si le combat n'est pas enregistré, nouvelle instance
        if (battle === null){
            const bat = await dbModel.db["battles"].create({
                playerId: playerId,
                bossId: bossId,
                deaths: deaths
            });

            await dbModel.db.sequelize.sync();
            res.json(JSON.stringify(bat));
        } else {
            battle.deaths = deaths;
            await battle.save();

            res.json(JSON.stringify(battle));
        }
    });

export default handler;