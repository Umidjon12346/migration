const { addNewpassports, getByIdPassport, findPassports, deletePassport, updatePassport } = require("../controllers/password.controller");

const router = require("express").Router();

router.post("/", addNewpassports);
router.get("/", findPassports);
router.get("/:id", getByIdPassport);
router.delete("/:id", deletePassport);
router.put("/:id", updatePassport);

module.exports = router;
