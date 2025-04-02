const sequelize = require("../config/db");
const { errorHandler } = require("../helpers/error_handler");
const Job = require("../models/jobs.model");

const addJob = async (req, res) => {
  try {
    const {
      company_id,
      country_id,
      category_id,
      title,
      job_description,
      number_of_vacancies,
      salary,
      posted_at,
    } = req.body;
    const newJob = await Job.create(
      company_id,
      country_id,
      category_id,
      title,
      job_description,
      number_of_vacancies,
      salary,
      posted_at
    );
    res.status(201).send({ message: "Job created", newJob });
  } catch (error) {
    errorHandler(error, res);
  }
};

const getAllJobs = async (req, res) => {
  try {
    const jobs = await Job.findAll();
    res.status(200).send({ jobs });
  } catch (error) {
    errorHandler(error, res);
  }
};

const getJobById = async (req, res) => {
  try {
    const job = await Job.findByPk(req.params.id);
    res.status(200).send({ job });
  } catch (error) {
    errorHandler(error, res);
  }
};

const deleteJob = async (req, res) => {
  try {
    const { id } = req.params;
    await Job.destroy({ where: { id } });
    res.status(200).send({ message: "Job deleted" });
  } catch (error) {
    errorHandler(error, res);
  }
};

const updateJob = async (req, res) => {
  try {
    const { id } = req.params;
    await Job.update(
      {company_id,
      country_id,
      category_id,
      title,
      job_description,
      number_of_vacancies,
      salary,
      posted_at},
      {
        where: { id },
        returning: true,
      }
    );
    res.status(200).send({ message: "Job updated" });
  } catch (error) {
    errorHandler(error, res);
  }
};

module.exports = {
  addJob,
  getAllJobs,
  getJobById,
  deleteJob,
  updateJob,
};
