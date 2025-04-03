const { addCompany, getAllCompany, getByIdCompany, deleteCompany, updateCompany } = require("../controllers/company.controller");
const authGuard = require("../middleware/guards/auth.guard");
const userAdminGuard = require("../middleware/guards/user.admin.guard");
const router = require("express").Router();

router.post("/",authGuard,userAdminGuard, addCompany);
router.get("/",authGuard, getAllCompany);
router.get("/:id",authGuard, getByIdCompany);
router.delete("/:id",authGuard,userAdminGuard, deleteCompany);
router.put("/:id",authGuard,userAdminGuard, updateCompany);

module.exports = router;
