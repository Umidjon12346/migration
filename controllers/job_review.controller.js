const Job_reviews = require("../models/job_reviews.model");
const { errorHandler } = require("../helpers/error_handler");
const addJobReview = async (req, res) => {
  try {
    const { user_id, job_id, rating, created_at } = req.body;
    const newReview = await Job_reviews.create(
      {user_id,
      job_id,
      rating,
      created_at}
    );
    res.status(201).send({ message: "Review added", newReview });
  } catch (error) {
    errorHandler(error, res);
  }
};

const getAllJobReviews = async (req, res) => {
  try {
    const reviews = await Job_reviews.findAll();
    res.status(200).send({ reviews });
  } catch (error) {
    errorHandler(error, res);
  }
};

const getJobReviewById = async (req, res) => {
  try {
    const { id } = req.params;
    const review = await Job_reviews.findByPk({ where: { id } });
    res.status(200).send({ review });
  } catch (error) {
    errorHandler(error, res);
  }
};

const deleteJobReview = async (req, res) => {
  try {
    const {id} = req.params;
    await Job_reviews.destroy({ where: { id } });
    res.status(200).send({ message: "Review deleted" });
  } catch (error) {
    errorHandler(error, res);
  }
};

const updateJobReview = async (req, res) => {
  try {
    const { id } = req.params;
    await Job_reviews.update({user_id, job_id, rating, created_at}, {
      where: { id },
      returning: true,
    });
    res.status(200).send({ message: "Review updated" });
  } catch (error) {
    errorHandler(error, res);
  }
};

module.exports = {
    addJobReview,
    getAllJobReviews,
    getJobReviewById,
    deleteJobReview,
    updateJobReview
}