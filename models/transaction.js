'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Transaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Transaction.belongsTo(models.User, {
        foreignKey: 'user_id'
      })
      Transaction.hasMany(models.TransactionDetail, {
        foreignKey: 'transaction_id',
      })
    }
  }
  Transaction.init({
    code_transaction: DataTypes.STRING,
    total_price: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    paymentMethod: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Transaction',
  });
  return Transaction;
};