const { addApplication, getAllApplications, getApplicationById, deleteApplication, updateApplication } = require("../controllers/application.controller");
const authGuard = require("../middleware/guards/auth.guard");
const userAdminGuard = require("../middleware/guards/user.admin.guard");

const router = require("express").Router();

router.post("/", authGuard,userAdminGuard, addApplication);
router.get("/", authGuard, getAllApplications);
router.get("/:id", authGuard, getApplicationById);
router.delete("/:id", authGuard, userAdminGuard, deleteApplication);
router.put("/:id", authGuard, userAdminGuard, updateApplication);

module.exports = router;
