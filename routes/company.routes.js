const { addCompany, getAllCompany, getByIdCompany, deleteCompany, updateCompany } = require("../controllers/company.controller");

const router = require("express").Router();

router.post("/", addCompany);
router.get("/", getAllCompany);
router.get("/:id", getByIdCompany);
router.delete("/:id", deleteCompany);
router.put("/:id", updateCompany);

module.exports = router;
