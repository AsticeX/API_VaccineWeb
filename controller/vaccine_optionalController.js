const vaccineOptional = require("../models/Vaccine_Optional.js");

exports.getVaccineOptional = async (req, res, next) => {
  try {
    const vaccine_optional = await vaccineOptional.find();
    res.json(vaccine_optional);
  } catch (err) {
    next(err);
  }
};

exports.createVaccineOptional = async (req, res, next) => {
  try {
    const newVaccineOptional = await vaccineOptional.create(req.body);
    res.status(201).json(newVaccineOptional);
  } catch (err) {
    next(err);
  }
};

exports.updateVaccineOptional = async (req, res, next) => {
  const vaccine_optionalId = req.params.id;
  const updatedData = req.body;

  try {
    const updatedVaccineOptional = await vaccineOptional.findByIdAndUpdate(vaccine_optionalId, updatedData, {
      new: true,
    });

    if (!updatedVaccineOptional) {
      return res.status(404).json({ message: "Vaccine Optional not found" });
    }

    res.json(updatedVaccineOptional);
  } catch (err) {
    next(err);
  }
};

exports.deleteVaccineOptional = async (req, res, next) => {
  const vaccine_optionalId = req.params.id;

  try {
    const deletedData = await vaccineOptional.findByIdAndRemove(vaccine_optionalId);

    if (!deletedData) {
      return res.status(404).json({ message: "Vaccine Optional not found" });
    }

    res.json({ message: "Vaccine Optional deleted successfully" });
  } catch (err) {
    next(err);
  }
};

exports.getVaccineOptionalByPriority = async (req, res, next) => {
  try {
    const vaccinesSortedByPriority = await vaccineOptional.find().sort({ priority: 1 }); // Sorting by priority in ascending order

    res.json(vaccinesSortedByPriority);
  } catch (err) {
    next(err);
  }
};

exports.getSingleVaccineOptional = async (req, res, next) => {
  const vaccine_optionalId = req.params.id; // Assuming 'id' is the parameter for the Vaccine EPI record

  try {
    const vaccineOptionalRecord = await vaccineOptional.findById(vaccine_optionalId);

    if (!vaccineOptionalRecord) {
      return res.status(404).json({ message: "Vaccine EPI not found" });
    }

    res.json(vaccineOptionalRecord);
  } catch (err) {
    next(err);
  }
};
