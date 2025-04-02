const sequelize = require("../config/db");
const { errorHandler } = require("../helpers/error_handler");
const CompanyWorkers = require("../models/company_worker.model");

const addCompanyWorker = async (req, res) => {
  try {
    const { companyId,userId,role } = req.body;

    const newUser = await CompanyWorkers.create({
      companyId,
      userId,
      role,
    });

    res.status(201).send({ message: "tug'ildi", newUser });
  } catch (error) {
    errorHandler(error, res);
  }
};

const getAllCompanyWorkers = async (req, res) => {
  try {
    const users = await CompanyWorkers.findAll();

    res.status(200).send({ users });
  } catch (error) {
    errorHandler(error, res);
  }
};
const getByIdCompanyWorker = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await Company.findByPk(id);

    res.status(200).send({ user });
  } catch (error) {
    errorHandler(error, res);
  }
};

const deleteCompanyWorker = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await Company.destroy({ where: { id } });

    res.status(200).send({ user });
  } catch (error) {
    errorHandler(error, res);
  }
};

const updateCompanyWorker = async (req, res) => {
  try {
    const { id } = req.params;
    const { companyId, userId, role } = req.body;
    const newuserskil = await CompanyWorkers.update(
      { companyId, userId, role },
      { where: { id }, returning: true }
    );
    res.status(200).send({ newuserskil: newuserskil[1][0] });
  } catch (error) {
    errorHandler(error, res);
  }
};

module.exports = {
  addCompanyWorker,
  getAllCompanyWorkers,
  getByIdCompanyWorker,
  deleteCompanyWorker,
  updateCompanyWorker,
};
