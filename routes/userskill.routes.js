const { addNewUserskill, getAllUserskill, findUserskillById, deleteUserskill, updateUserskill } = require("../controllers/userskill.controller");

const router = require("express").Router();

router.post("/", addNewUserskill);
router.get("/", getAllUserskill);
router.get("/:id", findUserskillById);
router.delete("/:id", deleteUserskill);
router.put("/:id", updateUserskill);

module.exports = router;
