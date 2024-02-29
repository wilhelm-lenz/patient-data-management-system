import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema(
  {
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    specialization: { type: String },
    contactInformation: { type: String },
    workingHours: { type: String },
  },
  { collection: "doctors", timestamps: true }
);

const Doctor = mongoose.model("Doctor", doctorSchema);

export default Doctor;
