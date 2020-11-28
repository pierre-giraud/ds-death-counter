import {Sequelize} from "sequelize";

const model = require('./model/model');
const sqlite = require('sqlite3');
const db = {};

/*const {readFileSync} = require('fs');
const {join} = require('path');
const file = readFileSync(join(__dirname, 'db'), 'utf8');
console.log(file);*/

console.log(__dirname + "db/db.sqlite");

// Connexion à la base de données
let sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: __dirname + "db/db.sqlite"
});

// Récupération du modèle
db["players"] = model.getPlayers(sequelize);
db["bosses"] = model.getBosses(sequelize);
db["battles"] = model.getBattles(sequelize);
db.sequelize = sequelize;

console.log("SEQUELIZE MDRRRRRRRRRR");

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