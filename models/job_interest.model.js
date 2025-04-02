const sequelize = require("../config/db");
const { DataTypes } = require("sequelize");
const Users = require("./users.model");

const Jobs = require("./jobs.model");

const Job_interest = sequelize.define(
  "job_interest",
  {
    timestamps: {
      type: DataTypes.TIME,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);
Jobs.belongsToMany(Users, { through: Job_interest });
Users.belongsToMany(Jobs, { through: Job_interest });




module.exports = Job_interest;
