const sequelize = require("../config/db");
const { DataTypes } = require("sequelize");
const Jobs = require("./jobs.model");
const Users = require("./users.model");
const Company = require("./company.model");

const Job_interviews = sequelize.define(
  "job_interviews",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    date: {
      type: DataTypes.DATE,
    },
    type: {
      type: DataTypes.STRING,
    },
    notes: {
      type: DataTypes.STRING(255),
    },
    status: {
      type: DataTypes.STRING,
    },
    result: {
      type: DataTypes.STRING,
    },
    created_at: {
      type: DataTypes.DATE,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

Job_interviews.belongsTo(Jobs);
Jobs.hasMany(Job_interviews);

Job_interviews.belongsTo(Users);
Users.hasMany(Job_interviews);

Job_interviews.belongsTo(Company);
Company.hasMany(Job_interviews);

module.exports = Job_interviews;
