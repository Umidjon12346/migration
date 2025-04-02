const { errorHandler } = require("../helpers/error_handler");
const Passport_data = require("../models/passport.model");
const Users = require("../models/users.model");

const addNewpassports = async (req, res) => {
  try {
    const { user_id, type, path, update_at } = req.body;
    const neWpassport = await Passport_data.create({
      user_id,
      type,
      path,
      update_at,
    });
    res.status(200).send({ messgae: "New passport added", neWpassport });
  } catch (error) {
    errorHandler(error, res);
  }
};

const findPassports = async (req, res) => {
  try {
    const passports = await Passport_data.findAll({include:Users});
    res.status(200).send({ passports });
  } catch (error) {
    errorHandler(error, res);
  }
};

const getByIdPassport = async (req, res) => {
  try {
    const { id } = req.params;
    const passport = await Passport_data.findByPk(id);
    res.status(200).send({ passport });
  } catch (error) {
    errorHandler(error, res);
  }
};

const updatePassport = async (req, res) => {
  try {
    const { id } = req.params;
    const { user_id, type, path, update_at } = req.body;
    const passport = await Passport_data.update(
      { user_id, type, path, update_at },
      { where: { id }, returning: true }
    );
    res.status(200).send({ passport: passport[1][0] });
  } catch (error) {
    errorHandler(error, res);
  }
};

const deletePassport = async (req, res) => {
  try {
    const { id } = req.params;
    const newpassport = await Passport_data.destroy({ where: { id } });
    res.status(200).send({ newpassport });
  } catch (error) {
    errorHandler(error, res);
  }
};

module.exports = {
  addNewpassports,
  findPassports,
  getByIdPassport,
  updatePassport,
  deletePassport,
};
