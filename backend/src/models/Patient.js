import mongoose from "mongoose";

const patientSchema = new mongoose.Schema(
  {
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    dateOfBirth: { type: String },
    gender: { type: String, enum: ["male", "female", "non-binary"] },
    address: { type: Object },
    contactInformation: { type: Object },
    insuranceInformation: { type: Object },
  },
  { collection: "patients", timestamps: true }
);

const Patient = mongoose.model("Patient", patientSchema);

export default Patient;
