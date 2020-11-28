import {Sequelize} from "sequelize";

const model = require('./model/model');
const sqlite = require('sqlite3');
const db = {};

// Connexion à la base de données
let sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: process.cwd() + "/db/db.sqlite"
});

// Récupération du modèle
db["players"] = model.getPlayers(sequelize);
db["bosses"] = model.getBosses(sequelize);
db["battles"] = model.getBattles(sequelize);
db.sequelize = sequelize;

async function connect() {
    let connectionOK = false;
    try {
        await sequelize.authenticate();
        connectionOK = true;
    } catch (error) {}

    return connectionOK;
}

module.exports = {
    db,
    connect
};