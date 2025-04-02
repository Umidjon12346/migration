const { addNewUserdocs, getUserdocs, findUserdocsById, deleteUserdocs, updateUserdocs } = require("../controllers/userdocument.controller");

const router = require("express").Router();

router.post("/", addNewUserdocs);
router.get("/", getUserdocs);
router.get("/:id", findUserdocsById);
router.delete("/:id", deleteUserdocs);
router.put("/:id", updateUserdocs);

module.exports = router;
