'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Product.belongsTo(models.Category, {
        foreignKey: 'category_id'
      })
      Product.belongsTo(models.User, {
        foreignKey: 'user_id',
      })
      Product.hasMany(models.Cart, {
        foreignKey: 'product_id'
      })
      Product.hasMany(models.TransactionDetail, {
        foreignKey: 'product_id'
      })
    }
  }
  Product.init({
    name: DataTypes.STRING,
    category_id: DataTypes.INTEGER,
    stock: DataTypes.INTEGER,
    desc: DataTypes.STRING,
    price: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};