const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Review extends Model {}

Review.init({
    title: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    review: {
        type: DataTypes.TEXT,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'review' // Make sure to use a lowercase model name
});

module.exports = Review;
