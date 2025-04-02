const sequelize = require("../config/db");
const { errorHandler } = require("../helpers/error_handler");
const Company = require("../models/company.model");
const Users = require("../models/users.model");


const addCompany = async (req, res) => {
  try {
    const { name,email,phone_number,web_site,description } = req.body;

    const newUser = await Company.create({
      name,
      email,
      phone_number,
      web_site,
      description,
    });

    res.status(201).send({ message: "tug'ildi", newUser });
  } catch (error) {
    errorHandler(error, res);
  }
};

const getAllCompany = async (req, res) => {
  try {
    const users = await Company.findAll({include:[Users]});

    res.status(200).send({ users });
  } catch (error) {
    errorHandler(error, res);
  }
};
const getByIdCompany = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await Company.findByPk(id);

    res.status(200).send({ user });
  } catch (error) {
    errorHandler(error, res);
  }
};

const deleteCompany = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await Company.destroy({ where: { id } });

    res.status(200).send({ user });
  } catch (error) {
    errorHandler(error, res);
  }
};

const updateCompany = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, phone_number, web_site, description } = req.body;
    const newuserskil = await Company.update(
      { name, email, phone_number, web_site, description },
      { where: { id }, returning: true }
    );
    res.status(200).send({ newuserskil: newuserskil[1][0] });
  } catch (error) {
    errorHandler(error, res);
  }
};

module.exports = {
  addCompany,
  getAllCompany,
  getByIdCompany,
  deleteCompany,
  updateCompany
};
