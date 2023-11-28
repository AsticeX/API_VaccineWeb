const express = require("express");
const router = express.Router();
const vaccineController = require("../controller/vaccineController.js");

router.get("/vaccine", vaccineController.getVaccines);
router.post("/vaccine", vaccineController.createVaccine);
router.put("/vaccine/:id", vaccineController.updateVaccine);
router.delete("/vaccine/:id", vaccineController.deleteVaccine);
router.get("/vaccine/search-vaccine-by-name/:name", vaccineController.searchVaccineByName);

module.exports = router;
