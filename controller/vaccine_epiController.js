const vaccineEPI = require("../models/Vaccine_EPI.js");

exports.getVaccineEPI = async (req, res, next) => {
  try {
    const vaccine_epi = await vaccineEPI.find();
    res.json(vaccine_epi);
  } catch (err) {
    next(err);
  }
};

exports.createVaccineEPI = async (req, res, next) => {
  try {
    const newVaccineEPI = await vaccineEPI.create(req.body);
    res.status(201).json(newVaccineEPI);
  } catch (err) {
    next(err);
  }
};

exports.updateVaccineEPI = async (req, res, next) => {
  const vaccine_epiId = req.params.id;
  const updatedData = req.body;

  try {
    const updatedVaccineEPI = await vaccineEPI.findByIdAndUpdate(vaccine_epiId, updatedData, {
      new: true,
    });

    if (!updatedVaccineEPI) {
      return res.status(404).json({ message: "Vaccine EPI not found" });
    }

    res.json(updatedVaccineEPI);
  } catch (err) {
    next(err);
  }
};

exports.deleteVaccineEPI = async (req, res, next) => {
  const vaccine_epiId = req.params.id;

  try {
    const deletedData = await vaccineEPI.findByIdAndRemove(vaccine_epiId);

    if (!deletedData) {
      return res.status(404).json({ message: "Vaccine EPI not found" });
    }

    res.json({ message: "Vaccine EPI deleted successfully" });
  } catch (err) {
    next(err);
  }
};

exports.getVaccineEPIByPriority = async (req, res, next) => {
  try {
    const vaccinesSortedByPriority = await vaccineEPI.find().sort({ priority: 1 }); // Sorting by priority in ascending order

    res.json(vaccinesSortedByPriority);
  } catch (err) {
    next(err);
  }
};

exports.getSingleVaccineEPI = async (req, res, next) => {
  const vaccine_epiId = req.params.id; // Assuming 'id' is the parameter for the Vaccine EPI record

  try {
    const vaccineEPIRecord = await vaccineEPI.findById(vaccine_epiId);

    if (!vaccineEPIRecord) {
      return res.status(404).json({ message: "Vaccine EPI not found" });
    }

    res.json(vaccineEPIRecord);
  } catch (err) {
    next(err);
  }
};
