const { addUser, getAllUser, getById, deleteUser, loginUser, refreshTokenUser, logoutUser } = require("../controllers/users.controller");
const authGuard = require("../middleware/guards/auth.guard");
const userAdminGuard = require("../middleware/guards/user.admin.guard");
const userSelfGuard = require("../middleware/guards/user.self.guard");
const router = require("express").Router();

router.post("/",authGuard,userAdminGuard, addUser);
router.get("/",authGuard,userAdminGuard, getAllUser);
router.get("/:id",authGuard,userSelfGuard, getById);
router.delete("/:id",authGuard,userAdminGuard, deleteUser);
router.post("/login", loginUser);
router.post("/refresh", refreshTokenUser);
router.post("/logout", logoutUser);

module.exports = router;
