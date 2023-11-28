const express = require("express");
const router = express.Router();
const vaccineEPIController = require("../controller/vaccine_epiController.js");

router.get("/vaccine_epi", vaccineEPIController.getVaccineEPI);
router.post("/vaccine_epi", vaccineEPIController.createVaccineEPI);
router.put("/vaccine_epi/:id", vaccineEPIController.updateVaccineEPI);
router.delete("/vaccine_epi/:id", vaccineEPIController.deleteVaccineEPI);
router.get("/vaccine_epi/search-vaccine-epi-by-priority", vaccineEPIController.getVaccineEPIByPriority);
router.get("/vaccine_epi/search-single-vaccine-epi/:id", vaccineEPIController.getSingleVaccineEPI);

module.exports = router;
