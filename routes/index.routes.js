const router = require("express").Router();

const usersROUTE = require("./users.routes");
const userskilROUTE = require("./userskill.routes");
const userdocROUTE = require("./userdoc.routes");
const passportROUTE = require("./passport.routes");
const companyROUTE = require("./company.routes");
const companyWorkerROUTE = require("./company_worker.routes");
const jobROUTE = require("./jobs.routes");
const jobReviewROUTE = require("./job_review.routes");
const jobInterestROUTE = require("./job_interest.routes");
const applicationROUTE = require("./application.routes");
const contractROUTE = require("./contract.routes");

router.use("/users", usersROUTE);
router.use("/user_skills", userskilROUTE);
router.use("/user_documents", userdocROUTE);
router.use("/passport_data", passportROUTE);
router.use("/company", companyROUTE);
router.use("/company_worker", companyWorkerROUTE);
router.use("/jobs", jobROUTE);
router.use("/job_review", jobReviewROUTE);
router.use("/job_interest", jobInterestROUTE);
router.use("/application", applicationROUTE);
router.use("/contract", contractROUTE);

module.exports = router;
