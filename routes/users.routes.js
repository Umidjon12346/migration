const { addUser, getAllUser, getById, deleteUser, loginUser, refreshTokenUser, logoutUser } = require("../controllers/users.controller");

const router = require("express").Router();

router.post("/", addUser);
router.get("/", getAllUser);
router.get("/:id", getById);
router.delete("/:id", deleteUser);
router.post("/login", loginUser);
router.post("/refresh", refreshTokenUser);
router.post("/logout", logoutUser);

module.exports = router;
