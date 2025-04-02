const sequelize = require("../config/db");
const { DataTypes } = require("sequelize");
const Jobs = require("./jobs.model");
const Users = require("./users.model");


const Job_reviews = sequelize.define(
  "job_reviews",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    rating:{
        type:DataTypes.STRING
    },
    created_at: DataTypes.DATE

  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

Job_reviews.belongsTo(Jobs)
Jobs.hasMany(Job_reviews)

Job_reviews.belongsTo(Users)
Users.hasMany(Job_reviews)

module.exports = Job_reviews;
