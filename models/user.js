module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
      // Define attributes
      username: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
    });
    return User;
  };
  