const { addJobInterest, getAllJobInterests, getJobInterestById, deleteJobInterest, updateJobInterest } = require("../controllers/job_interest.controller");
const authGuard = require("../middleware/guards/auth.guard");
const router = require("express").Router();
const userAdminGuard = require("../middleware/guards/user.admin.guard");

router.post("/",authGuard,userAdminGuard, addJobInterest);
router.get("/",authGuard, getAllJobInterests);
router.get("/:id",authGuard, getJobInterestById);
router.delete("/:id",authGuard,userAdminGuard, deleteJobInterest);
router.put("/:id",authGuard,userAdminGuard, updateJobInterest);

module.exports = router;
