const { addRequirement, getAllRequirements, getRequirementById, deleteRequirement, updateRequirement } = require("../controllers/requirement.controller");
const authGuard = require("../middleware/guards/auth.guard");
const router = require("express").Router();
const userAdminGuard = require("../middleware/guards/user.admin.guard");

router.post("/",authGuard,userAdminGuard, addRequirement);
router.get("/",authGuard, getAllRequirements);
router.get("/:id",authGuard, getRequirementById);
router.delete("/:id",authGuard,userAdminGuard, deleteRequirement);
router.put("/:id",authGuard,userAdminGuard, updateRequirement);

module.exports = router;
