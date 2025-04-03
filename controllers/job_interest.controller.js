const { errorHandler } = require("../helpers/error.handler");
const Job_interest = require("../models/job_interest.model");

const addJobInterest = async (req, res) => {
  try {
    const { user_id, job_id, timestamps } = req.body;
    const newInterest = await Job_interest.create({
      user_id,
      job_id,
      timestamps,
    });
    res.status(201).send({ message: "Interest noted", newInterest });
  } catch (error) {
    errorHandler(error, res);
  }
};

const getAllJobInterests = async (req, res) => {
  try {
    const interests = await Job_interest.findAll();
    res.status(200).send({ interests });
  } catch (error) {
    errorHandler(error, res);
  }
};

const getJobInterestById = async (req, res) => {
  try {
    const { id } = req.params;
    const interest = await Job_interest.findByPk({ where: { id } });
    res.status(200).send({ interest });
  } catch (error) {
    errorHandler(error, res);
  }
};

const deleteJobInterest = async (req, res) => {
  try {
    const { id } = req.params;
    await Job_interest.destroy({ where: { id } });
    res.status(200).send({ message: "Interest deleted" });
  } catch (error) {
    errorHandler(error, res);
  }
};

const updateJobInterest = async (req, res) => {
  try {
    const { id } = req.params;
    await Job_interest.update(
      { user_id, job_id, timestamps },
      {
        where: { id },
        returning: true,
      }
    );
    res.status(200).send({ message: "Interest updated" });
  } catch (error) {
    errorHandler(error, res);
  }
};

module.exports = {
  addJobInterest,
  getAllJobInterests,
  getJobInterestById,
  deleteJobInterest,
  updateJobInterest,
};
