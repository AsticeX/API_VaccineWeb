const mongoose = require("mongoose");

const VaccineSchema = new mongoose.Schema(
  {
    user_id: String,
    vaccine_name: String,
    expire: Date,
    attendance_date: Date,
    hospital_name: String,
    dose_user: Array,
    dose_require: Number,
    hospital: String,
    priority: Number,
    flag: Boolean,
  },
  { timestamps: true }
);

module.exports = mongoose.model("vaccine_optional", VaccineSchema);
