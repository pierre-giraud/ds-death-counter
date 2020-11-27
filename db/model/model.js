import DataTypes from "sequelize";

module.exports = {
    getPlayers: (sequelize) => {
        return sequelize.define('players', {
            name: {
                type: DataTypes.STRING,
                unique: true,
            },
        });
    },
    getBosses: (sequelize) => {
        return sequelize.define('bosses', {
            name: {
                type: DataTypes.STRING,
                unique: true,
            },
        });
    },
    getBattles: (sequelize) => {
        return sequelize.define('battles', {
            playerId: DataTypes.INTEGER,
            bossId: DataTypes.INTEGER,
            deaths: DataTypes.INTEGER
        });
    },
};