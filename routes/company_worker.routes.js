const { addCompanyWorker, getAllCompanyWorkers, getByIdCompanyWorker, deleteCompanyWorker, updateCompanyWorker } = require("../controllers/company_worker.controller");

const router = require("express").Router();

router.post("/", addCompanyWorker);
router.get("/", getAllCompanyWorkers);
router.get("/:id", getByIdCompanyWorker);
router.delete("/:id", deleteCompanyWorker);
router.put("/:id", updateCompanyWorker);

module.exports = router;
