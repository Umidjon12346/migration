const sequelize = require("../config/db");

const { DataTypes } = require("sequelize");

const Users = sequelize.define(
  "users",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    first_name: {
      type: DataTypes.STRING(50),
    },
    last_name: {
      type: DataTypes.STRING(50),
    },
    phone_number: {
      type: DataTypes.STRING(15),
    },
    password:{
      type: DataTypes.STRING(100)
    },
    role:{
      type:DataTypes.STRING(30)
    },
    refresh_token:{
      type: DataTypes.STRING
    },
    created_at:{
      type: DataTypes.DATE
    }
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

module.exports = Users;
