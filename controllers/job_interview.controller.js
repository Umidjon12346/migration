const Job_interviews = require("../models/job_interviews.model");


const addJobInterview = async (req, res) => {
  try {
    const {
      userId,
      jobId,
      companyId,
      date,
      type,
      notes,
      status,
      result,
      created_at,
    } = req.body;
    const newJobInterview = await Job_interviews.create({
      userId,
      jobId,
      companyId,
      date,
      type,
      notes,
      status,
      result,
      created_at,
    });
    res.status(201).send({ message: "Job interview created", newJobInterview });
  } catch (error) {
    errorHandler(error, res);
  }
};


const getAllJobInterviews = async (req, res) => {
  try {
    const jobInterviews = await Job_interviews.findAll();
    res.status(200).send({ jobInterviews });
  } catch (error) {
    errorHandler(error, res);
  }
};


const getJobInterviewById = async (req, res) => {
  try {
    const { id } = req.params;
    const jobInterview = await Job_interviews.findByPk(id);
    res.status(200).send({ jobInterview });
  } catch (error) {
    errorHandler(error, res);
  }
};


const updateJobInterview = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      userId,
      jobId,
      companyId,
      date,
      type,
      notes,
      status,
      result,
      created_at,
    } = req.body;
    await Job_interviews.update(
      {
        userId,
        jobId,
        companyId,
        date,
        type,
        notes,
        status,
        result,
        created_at,
      },
      { where: { id }, returning: true }
    );
    res.status(200).send({ message: "Job interview updated" });
  } catch (error) {
    errorHandler(error, res);
  }
};


const deleteJobInterview = async (req, res) => {
  try {
    const { id } = req.params;
    await Job_interviews.destroy({ where: { id } });
    res.status(200).send({ message: "Job interview deleted" });
  } catch (error) {
    errorHandler(error, res);
  }
};

module.exports = {
  addJobInterview,
  getAllJobInterviews,
  getJobInterviewById,
  updateJobInterview,
  deleteJobInterview,
};
