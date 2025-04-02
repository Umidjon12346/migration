const { addJobReview, getAllJobReviews, getJobReviewById, deleteJobReview, updateJobReview } = require("../controllers/job_review.controller");

const router = require("express").Router();

router.post("/", addJobReview);
router.get("/", getAllJobReviews);
router.get("/:id", getJobReviewById);
router.delete("/:id", deleteJobReview);
router.put("/:id", updateJobReview);

module.exports = router;
