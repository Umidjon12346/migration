const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Category = sequelize.define(
  "category",
  {
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.STRING,
    },
    parent_category: {
      type: DataTypes.BIGINT,
      references: {
        model: "categories",
        key: "id",
      },
    },
  },
  { timestamps: false }
);

module.exports = Category
