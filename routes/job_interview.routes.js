const { addJobInterview, getAllJobInterviews, getJobInterviewById, deleteJobInterview, updateJobInterview } = require("../controllers/job_interview.controller");
const authGuard = require("../middleware/guards/auth.guard");
const router = require("express").Router();
const userAdminGuard = require("../middleware/guards/user.admin.guard");

router.post("/",authGuard,userAdminGuard, addJobInterview);
router.get("/",authGuard, getAllJobInterviews);
router.get("/:id",authGuard, getJobInterviewById);
router.delete("/:id",authGuard,userAdminGuard, deleteJobInterview);
router.put("/:id",authGuard,userAdminGuard, updateJobInterview);

module.exports = router;
