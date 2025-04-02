const sequelize = require("../config/db");
const { DataTypes } = require("sequelize");
const Users = require("./users.model");

const User_documents = sequelize.define(
  "user_documents",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    type: {
      type: DataTypes.STRING(30),
    },
    path: {
      type: DataTypes.STRING(45),
    },
    update_at: {
      type: DataTypes.DATE,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

User_documents.belongsTo(Users);
Users.hasMany(User_documents);

module.exports = User_documents;
