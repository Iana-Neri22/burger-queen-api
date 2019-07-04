'use strict';
module.exports = (sequelize, DataTypes) => {
  const Products = sequelize.define('Products', {
    name: DataTypes.STRING,
    price: DataTypes.FLOAT
  }, {});
  Products.associate = function(models) {
    Products.hasMany(models.OrderProducts, {foreignKey:'productId'})
  };
  // Products.create({name:"Hambúrger Simples Vegetariano", price:10})
  return Products;
};