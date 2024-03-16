const sequelize = require('../config/connection');
const { User, Location, Review } = require('../models');

const userData = require('./userData.json');
const locationData = require('./locationData.json');
const reviewData = require('./reviewData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

//   populating the Location model with data from the locationData array, and for each location, it assigns a random user_id from the users array before exiting the process.
  for (const location of locationData) {
    await Location.create({
      ...location,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();
