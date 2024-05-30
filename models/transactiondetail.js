'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TransactionDetail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      TransactionDetail.belongsTo(models.Transaction, {
        foreignKey: 'transaction_id'
      });
      TransactionDetail.belongsTo(models.Product, {
        foreignKey: 'product_id'
      });
    }
  }
  TransactionDetail.init({
    transaction_id: DataTypes.INTEGER,
    product_id: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'TransactionDetail',
  });
  return TransactionDetail;
};