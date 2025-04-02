const sequelize = require("../config/db");
const { DataTypes } = require("sequelize");
const Users = require("./users.model");

const Passport_data = sequelize.define(
  "passport_data",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
    },
    seria: {
      type: DataTypes.STRING(2),
    },
    given_data: {
      type: DataTypes.DATE,
    },
    expiration_date: {
      type: DataTypes.DATE,
    },
    born_date: {
      type: DataTypes.DATE,
    },
    nartionality: {
      type: DataTypes.STRING(30),
    },
    born_country: {
      type: DataTypes.STRING(30),
    },
    born_place: {
      type: DataTypes.STRING(30),
    },
    given_by_whom: {
      type: DataTypes.STRING(30),
    },
    citizenship: {
      type: DataTypes.STRING(30),
    },
    gender: {
      type: DataTypes.STRING(),
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);
Passport_data.belongsTo(Users)
Users.hasMany(Passport_data)

module.exports = Passport_data;
