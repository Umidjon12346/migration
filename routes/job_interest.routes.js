const { addJobInterest, getAllJobInterests, getJobInterestById, deleteJobInterest, updateJobInterest } = require("../controllers/job_interest.controller");

const router = require("express").Router();

router.post("/", addJobInterest);
router.get("/", getAllJobInterests);
router.get("/:id", getJobInterestById);
router.delete("/:id", deleteJobInterest);
router.put("/:id", updateJobInterest);

module.exports = router;
