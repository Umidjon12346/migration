const { addCompanyWorker, getAllCompanyWorkers, getByIdCompanyWorker, deleteCompanyWorker, updateCompanyWorker } = require("../controllers/company_worker.controller");
const authGuard = require("../middleware/guards/auth.guard");
const router = require("express").Router();
const userAdminGuard = require("../middleware/guards/user.admin.guard");


router.post("/",authGuard,userAdminGuard, addCompanyWorker);
router.get("/",authGuard, getAllCompanyWorkers);
router.get("/:id",authGuard, getByIdCompanyWorker);
router.delete("/:id",authGuard,userAdminGuard, deleteCompanyWorker);
router.put("/:id",authGuard,userAdminGuard, updateCompanyWorker);

module.exports = router;
