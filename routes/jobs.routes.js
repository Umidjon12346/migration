const { addJob, getAllJobs, getJobById, deleteJob, updateJob } = require("../controllers/jobs.controller");

const router = require("express").Router();

router.post("/", addJob);
router.get("/", getAllJobs);
router.get("/:id", getJobById);
router.delete("/:id", deleteJob);
router.put("/:id", updateJob);

module.exports = router;
