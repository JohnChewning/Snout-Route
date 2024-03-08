//this file is for testing the connection between the database and the config.js 

console.log('Starting database connection test...');

const { sequelize } = require('./models'); // Adjust as necessary

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  })
  .finally(() => {
    console.log('Database connection test completed.');
    sequelize.close(); // Close the connection after testing
  });

