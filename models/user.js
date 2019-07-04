'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    User.hasMany(models.Orders, {
      foreignKey: 'uid'
    });
  };
  // User.create({email:"teste@gmail.com"});
  // User.create({email:"paloma@gmail.com"});
  return User;
};