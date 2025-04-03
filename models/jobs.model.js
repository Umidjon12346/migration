const sequelize = require("../config/db");
const { DataTypes } = require("sequelize");
const Company = require("./company.model");
const Country = require("./country.model");
const Category = require("./category.model");

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

Jobs.belongsTo(Country)
Country.hasMany(Jobs)

Jobs.belongsTo(Category)
Category.hasMany(Jobs)

module.exports = Jobs;
