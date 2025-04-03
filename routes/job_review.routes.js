const { addJobReview, getAllJobReviews, getJobReviewById, deleteJobReview, updateJobReview } = require("../controllers/job_review.controller");
const authGuard = require("../middleware/guards/auth.guard");
const router = require("express").Router();
const userAdminGuard = require("../middleware/guards/user.admin.guard");

router.post("/",authGuard,userAdminGuard, addJobReview);
router.get("/", authGuard, getAllJobReviews);
router.get("/:id", authGuard, getJobReviewById);
router.delete("/:id", authGuard,userAdminGuard, deleteJobReview);
router.put("/:id", authGuard,userAdminGuard, updateJobReview);

module.exports = router;
