const Application = require("../models/application.model");
const { errorHandler } = require("../helpers/error.handler");

const addApplication = async (req, res) => {
  try {
    const { applicant_id, application_job_id, status, created_date } = req.body;
    const newApplication = await Application.create({
      applicant_id,
      application_job_id,
      status,
      created_date,
    });
    res.status(201).send({ message: "Application created", newApplication });
  } catch (error) {
    errorHandler(error, res);
  }
};

const getAllApplications = async (req, res) => {
  try {
    const applications = await Application.findAll();
    res.status(200).send({ applications });
  } catch (error) {
    errorHandler(error, res);
  }
};

const getApplicationById = async (req, res) => {
  try {
    const { id } = req.params;
    const application = await Application.findByPk(id);
    res.status(200).send({ application });
  } catch (error) {
    errorHandler(error, res);
  }
};

const updateApplication = async (req, res) => {
  try {
    const { id } = req.params;
    const { applicant_id, application_job_id, status, created_date } = req.body;
    await Application.update(
      { applicant_id, application_job_id, status, created_date },
      { where: { id }, returning: true }
    );
    res.status(200).send({ message: "Application updated" });
  } catch (error) {
    errorHandler(error, res);
  }
};

const deleteApplication = async (req, res) => {
  try {
    const { id } = req.params;
    await Application.destroy({ where: { id } });
    res.status(200).send({ message: "Application deleted" });
  } catch (error) {
    errorHandler(error, res);
  }
};

module.exports = {
  addApplication,
  getAllApplications,
  getApplicationById,
  updateApplication,
  deleteApplication,
};
