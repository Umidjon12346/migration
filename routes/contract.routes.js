const { addContract, getAllContracts, getContractById, deleteContract, updateContract } = require("../controllers/contract.controller");
const authGuard = require("../middleware/guards/auth.guard");
const router = require("express").Router();
const userAdminGuard = require("../middleware/guards/user.admin.guard");

router.post("/",authGuard,userAdminGuard, addContract);
router.get("/",authGuard, getAllContracts);
router.get("/:id",authGuard, getContractById);
router.delete("/:id",authGuard,userAdminGuard, deleteContract);
router.put("/:id",authGuard,userAdminGuard, updateContract);

module.exports = router;
