const { addContract, getAllContracts, getContractById, deleteContract, updateContract } = require("../controllers/contract.controller");

const router = require("express").Router();

router.post("/", addContract);
router.get("/", getAllContracts);
router.get("/:id", getContractById);
router.delete("/:id", deleteContract);
router.put("/:id", updateContract);

module.exports = router;
