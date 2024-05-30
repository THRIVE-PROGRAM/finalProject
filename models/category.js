"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Category.hasMany(models.Product, {
        foreignKey: "category_id",
      });
    }
  }
  Category.init(
    {
      name: {
        type: DataTypes.STRING,
        unique: true,
        validate: {
          isExist: async (value) => {
            const category = await Category.findOne({
              where: {
                name: value,
              },
            });

            if (category) {
              throw new Error("Category already exist");
            }
          },
        },
      },
    },
    {
      sequelize,
      modelName: "Category",
    }
  );
  return Category;
};
