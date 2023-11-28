const express = require("express");
const router = express.Router();
const vaccineOptionalController = require("../controller/vaccine_optionalController.js");

router.get("/vaccine_optional", vaccineOptionalController.getVaccineOptional);
router.post("/vaccine_optional", vaccineOptionalController.createVaccineOptional);
router.put("/vaccine_optional/:id", vaccineOptionalController.updateVaccineOptional);
router.delete("/vaccine_optional/:id", vaccineOptionalController.deleteVaccineOptional);
router.get("/vaccine_optional/search-vaccine-optional-by-priority", vaccineOptionalController.getVaccineOptionalByPriority);
router.get("/vaccine_optional/search-single-vaccine-optional/:id", vaccineOptionalController.getSingleVaccineOptional);

module.exports = router;
