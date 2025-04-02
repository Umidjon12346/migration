const sequelize = require("../config/db");
const { DataTypes } = require("sequelize");
const Users = require("./users.model");

const User_skills = sequelize.define(
  "user_skills",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
    },
    edu_level: {
      type: DataTypes.STRING,
    },
    language: {
      type: DataTypes.STRING(20),
    },
    experince: {
      type: DataTypes.STRING(55),
    },
    bio: {
      type: DataTypes.STRING,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

User_skills.belongsTo(Users)
Users.hasMany(User_skills)

module.exports = User_skills;
