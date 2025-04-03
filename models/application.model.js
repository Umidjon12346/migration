const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Application = sequelize.define(
  "applications",
  {
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
    },
    applicant_id: {
      type: DataTypes.BIGINT,
    },
    application_job_id: {
      type: DataTypes.BIGINT,
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

module.exports = Application;
