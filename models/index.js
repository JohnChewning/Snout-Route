const User = require('./user');
const Review = require('./review');
const Location = require('./location');

User.hasMany(Review, {
    foreignKey: 'user_id'
})

Review.belongsTo(User, {
    foreignKey: 'user_id'
})

Location.hasMany(Review, {
    foreignKey: 'location_id'
})


module.exports = {
    User, Review, Location
};