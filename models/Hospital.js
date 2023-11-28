const mongoose = require("mongoose");

const VaccineSchema = new mongoose.Schema(
  {
    hospital_name: String,
    latitude: Number,
    longitude: Number,
  },
  { timestamps: true }
);

module.exports = mongoose.model("hospital", VaccineSchema);
