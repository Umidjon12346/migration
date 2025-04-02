const sequelize = require("../config/db");
const { DataTypes } = require("sequelize");
const Company = require("./company.model");

const Jobs = sequelize.define(
  "jobs",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING(120),
    },
    job_description: {
      type: DataTypes.TEXT,
    },
    number_of_vacancies: {
      type: DataTypes.INTEGER,
    },
    salary: {
      type: DataTypes.INTEGER,
    },
    posted_at: {
      type: DataTypes.DATE,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

Jobs.belongsTo(Company)
Company.hasMany(Jobs)

module.exports = Jobs;
