const { errorHandler } = require("../helpers/error.handler");
const User_documents = require("../models/userdoc.model");
const Users = require("../models/users.model");

const addNewUserdocs = async (req, res) => {
  try {
    const { user_id, type, path, update_at } = req.body;
    const neWuserdoc = await User_documents.create({
      user_id,
      type,
      path,
      update_at,
    });
    res.status(200).send({ messgae: "New userdoc added", neWuserdoc });
  } catch (error) {
    errorHandler(error, res);
  }
};

const getUserdocs = async (req, res) => {
  try {
    const userdocs = await User_documents.findAll({
      include: Users,
      attributes: ["first_name"],
    });
    res.status(200).send({ userdocs });
  } catch (error) {
    errorHandler(error, res);
  }
};

const findUserdocsById = async (req, res) => {
  try {
    const { id } = req.params;
    const userdoc = await User_documents.findByPk(id);
    res.status(200).send({ userdoc });
  } catch (error) {
    errorHandler(error, res);
  }
};

const updateUserdocs = async (req, res) => {
  try {
    const { id } = req.params;
    const { user_id, type, path, update_at } = req.body;
    const userdoc = await User_documents.update(
      { user_id, type, path, update_at },
      { where: { id }, returning: true }
    );
    res.status(200).send({ userdoc: userdoc[1][0] });
  } catch (error) {
    errorHandler(error, res);
  }
};

const deleteUserdocs = async (req, res) => {
  try {
    const { id } = req.params;
    const userdoc = await User_documents.destroy({ where: { id } });
    res.status(200).send({ userdoc });
  } catch (error) {
    errorHandler(error, res);
  }
};

module.exports = {
  addNewUserdocs,
  findUserdocsById,
  getUserdocs,
  updateUserdocs,
  deleteUserdocs,
};
