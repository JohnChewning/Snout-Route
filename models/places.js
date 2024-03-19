const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


class Places extends Model{}

Places.init({
    destination: {
        type: DataTypes.STRING,
        allowNull: false
    },
    
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },

    vicinity: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
   sequelize,
   modelName:'places' 
});

module.exports = Places;