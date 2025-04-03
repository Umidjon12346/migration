const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

// Countries Model
const Country = sequelize.define(
  "country",
  {
    id: {
      type: DataTypes.SMALLINT,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,  
    },
    code: {
      type: DataTypes.STRING,
    },
  },
  { timestamps: false }
);
 
module.exports = Country