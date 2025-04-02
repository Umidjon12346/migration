const router = require("express").Router();

const usersROUTE = require("./users.routes");
const userskilROUTE = require("./userskill.routes");
const userdocROUTE = require("./userdoc.routes");
const passportROUTE = require("./passport.routes");
const companyROUTE = require("./company.routes");
const companyWorkerROUTE = require("./company_worker.routes");

router.use("/users", usersROUTE);
router.use("/user_skills", userskilROUTE);
router.use("/user_documents", userdocROUTE);
router.use("/passport_data", passportROUTE);
router.use("/company", companyROUTE);
router.use("/company-worker", companyWorkerROUTE);

module.exports = router;
