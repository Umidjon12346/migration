const { errorHandler } = require("../helpers/error.handler");
const Country = require("../models/country.model");

const addCountry = async (req, res) => {
  try {
    const { name, code } = req.body;
    const newCountry = await Country.create({ name, code });
    res.status(201).send({ message: "Country created", newCountry });
  } catch (error) {
    errorHandler(error, res);
  }
};

const getAllCountries = async (req, res) => {
  try {
    const countries = await Country.findAll();
    res.status(200).send({ countries });
  } catch (error) {
    errorHandler(error, res);
  }
};

const getCountryById = async (req, res) => {
  try {
    const { id } = req.params;
    const country = await Country.findByPk(id);
    res.status(200).send({ country });
  } catch (error) {
    errorHandler(error, res);
  }
};

const updateCountry = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, code } = req.body;
    await Country.update({ name, code }, { where: { id } });
    res.status(200).send({ message: "Country updated" });
  } catch (error) {
    errorHandler(error, res);
  }
};

const deleteCountry = async (req, res) => {
  try {
    const { id } = req.params;
    await Country.destroy({ where: { id } });
    res.status(200).send({ message: "Country deleted" });
  } catch (error) {
    errorHandler(error, res);
  }
};

module.exports = {
  addCountry,
  getAllCountries,
  getCountryById,
  deleteCountry,
  updateCountry,
};
