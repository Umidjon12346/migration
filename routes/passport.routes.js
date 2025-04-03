const { addNewpassports, getByIdPassport, findPassports, deletePassport, updatePassport } = require("../controllers/password.controller");
const authGuard = require("../middleware/guards/auth.guard");
const router = require("express").Router();
const userAdminGuard = require("../middleware/guards/user.admin.guard");

router.post("/",authGuard,userAdminGuard, addNewpassports);
router.get("/",authGuard, findPassports);
router.get("/:id",authGuard, getByIdPassport);
router.delete("/:id",authGuard,userAdminGuard, deletePassport);
router.put("/:id",authGuard,userAdminGuard, updatePassport);

module.exports = router;
