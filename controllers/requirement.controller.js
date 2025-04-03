const { errorHandler } = require("../helpers/error.handler");
const Requirement = require("../models/requirement.model");

const addRequirement = async (req, res) => {
  try {
    const {
      obligations,
      work_type,
      work_location,
      work_time,
      worker_residence,
      worker_gender,
      age_requirement,
      experience,
      education_level,
      spoken_language,
      trial_period,
      knowledge_and_usage,
      personal_qualities,
      other_requirement,
    } = req.body;

    const newRequirement = await Requirement.create({
      obligations,
      work_type,
      work_location,
      work_time,
      worker_residence,
      worker_gender,
      age_requirement,
      experience,
      education_level,
      spoken_language,
      trial_period,
      knowledge_and_usage,
      personal_qualities,
      other_requirement,
    });

    res.status(201).send({ message: "Requirement created", newRequirement });
  } catch (error) {
    errorHandler(error, res);
  }
};

const getAllRequirements = async (req, res) => {
  try {
    const requirements = await Requirement.findAll();
    res.status(200).send({ requirements });
  } catch (error) {
    errorHandler(error, res);
  }
};

const getRequirementById = async (req, res) => {
  try {
    const { id } = req.params;
    const requirement = await Requirement.findByPk(id);
    res.status(200).send({ requirement });
  } catch (error) {
    errorHandler(error, res);
  }
};

const updateRequirement = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      obligations,
      work_type,
      work_location,
      work_time,
      worker_residence,
      worker_gender,
      age_requirement,
      experience,
      education_level,
      spoken_language,
      trial_period,
      knowledge_and_usage,
      personal_qualities,
      other_requirement,
    } = req.body;

    await Requirement.update(
      {
        obligations,
        work_type,
        work_location,
        work_time,
        worker_residence,
        worker_gender,
        age_requirement,
        experience,
        education_level,
        spoken_language,
        trial_period,
        knowledge_and_usage,
        personal_qualities,
        other_requirement,
      },
      { where: { id } }
    );

    res.status(200).send({ message: "Requirement updated" });
  } catch (error) {
    errorHandler(error, res);
  }
};

const deleteRequirement = async (req, res) => {
  try {
    const { id } = req.params;
    await Requirement.destroy({ where: { id } });
    res.status(200).send({ message: "Requirement deleted" });
  } catch (error) {
    errorHandler(error, res);
  }
};

module.exports = {
  addRequirement,
  getAllRequirements,
  getRequirementById,
  deleteRequirement,
  updateRequirement,
};
