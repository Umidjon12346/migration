const { addNewUserdocs, getUserdocs, findUserdocsById, deleteUserdocs, updateUserdocs } = require("../controllers/userdocument.controller");
const authGuard = require("../middleware/guards/auth.guard");
const router = require("express").Router();
const userAdminGuard = require("../middleware/guards/user.admin.guard");

router.post("/",authGuard,userAdminGuard, addNewUserdocs);
router.get("/",authGuard, getUserdocs);
router.get("/:id",authGuard, findUserdocsById);
router.delete("/:id",authGuard,userAdminGuard, deleteUserdocs);
router.put("/:id",authGuard,userAdminGuard, updateUserdocs);

module.exports = router;
