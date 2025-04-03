const { addJob, getAllJobs, getJobById, deleteJob, updateJob } = require("../controllers/jobs.controller");
const authGuard = require("../middleware/guards/auth.guard");
const router = require("express").Router();
const userAdminGuard = require("../middleware/guards/user.admin.guard");

router.post("/",authGuard,userAdminGuard, addJob);
router.get("/", authGuard, getAllJobs);
router.get("/:id", authGuard, getJobById);
router.delete("/:id", authGuard,userAdminGuard, deleteJob);
router.put("/:id", authGuard,userAdminGuard, updateJob);

module.exports = router;
