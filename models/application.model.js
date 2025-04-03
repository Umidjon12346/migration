const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");
const Users = require("./users.model");
const Jobs = require("./jobs.model");

const Application = sequelize.define(
  "applications",
  {
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
    },
    
    status: {
      type: DataTypes.STRING,
    },
    created_date: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

Application.belongsTo(Users)
Users.hasMany(Application, { foreignKey: 'applicant_id' });

Application.belongsTo(Jobs)
Jobs.hasMany(Application, { foreignKey: 'application_job_id' });

module.exports = Application;
