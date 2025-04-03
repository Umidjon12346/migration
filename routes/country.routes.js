const { addCountry, getAllCountries, getCountryById, deleteCountry, updateCountry } = require("../controllers/country.controller");
const authGuard = require("../middleware/guards/auth.guard");
const router = require("express").Router();
const userAdminGuard = require("../middleware/guards/user.admin.guard");

router.post("/",authGuard,userAdminGuard, addCountry);
router.get("/",authGuard, getAllCountries);
router.get("/:id",authGuard, getCountryById);
router.delete("/:id",authGuard,userAdminGuard, deleteCountry);
router.put("/:id",authGuard,userAdminGuard, updateCountry);

module.exports = router;
