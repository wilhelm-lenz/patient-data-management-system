import mongoose from "mongoose";

const patientSchema = new mongoose.Schema(
  {
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    dateOfBirth: { type: Date },
    gender: { type: String },
    address: { type: String },
    contactInformation: { type: String },
    insuranceInformation: { type: String },
  },
  { collection: "patients", timestamps: true }
);

const Patient = mongoose.model("Patient", patientSchema);

export default Patient;
