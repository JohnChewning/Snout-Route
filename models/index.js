const User = require('./User');
const Review = require('./Review');
const Location = require('./Location');

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