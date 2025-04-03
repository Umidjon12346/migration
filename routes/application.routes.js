const { addApplication, getAllApplications, getApplicationById, deleteApplication, updateApplication } = require("../controllers/application.controller");

const router = require("express").Router();

router.post("/", addApplication);
router.get("/", getAllApplications);
router.get("/:id", getApplicationById);
router.delete("/:id", deleteApplication);
router.put("/:id", updateApplication);

module.exports = router;
