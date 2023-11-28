const mongoose = require("mongoose");

const VaccineSchema = new mongoose.Schema(
  {
    vaccine_name: String,
    type: String,
    number_for_next_dose: Number,
    dose_require: Number,
  },
  { timestamps: true }
);

module.exports = mongoose.model("vaccine", VaccineSchema);
