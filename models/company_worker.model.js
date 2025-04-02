const sequelize = require("../config/db");

const { DataTypes } = require("sequelize");
const Company = require("./company.model");
const Users = require("./users.model");

const CompanyWorkers = sequelize.define(
  "company_workers",
  {
    role: {
      type: DataTypes.STRING(50),
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

Company.belongsToMany(Users,{through:CompanyWorkers})
Users.belongsToMany(Company,{through:CompanyWorkers})

CompanyWorkers.belongsTo(Users)
CompanyWorkers.belongsTo(Company)


module.exports = CompanyWorkers;
