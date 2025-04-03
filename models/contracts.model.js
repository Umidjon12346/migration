const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");
const Application = require("./application.model");
const Contract = sequelize.define(
  "contracts",
  {
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
    },
    contract_file_path: {
      type: DataTypes.STRING,
    },
    start_date: {
      type: DataTypes.DATE,
    },
    end_date: {
      type: DataTypes.DATE,
    },
    terms: {
      type: DataTypes.STRING,
    },
    created_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

Contract.belongsTo(Application)
Application.hasMany(Contract, { foreignKey: "application_id" });

module.exports = { Application, Contract };
