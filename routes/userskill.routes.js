const { addNewUserskill, getAllUserskill, findUserskillById, deleteUserskill, updateUserskill } = require("../controllers/userskill.controller");
const authGuard = require("../middleware/guards/auth.guard");
const userAdminGuard = require("../middleware/guards/user.admin.guard");
const router = require("express").Router();

router.post("/",authGuard,userAdminGuard, addNewUserskill);
router.get("/",authGuard, getAllUserskill);
router.get("/:id",authGuard, findUserskillById);
router.delete("/:id",authGuard,userAdminGuard, deleteUserskill);
router.put("/:id",authGuard,userAdminGuard, updateUserskill);

module.exports = router;
