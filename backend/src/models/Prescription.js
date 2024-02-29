import mongoose from "mongoose";

const prescriptionSchema = new mongoose.Schema(
  {
    treatmentId: { type: String },
    medicationId: { type: String },
    dosage: { type: String },
    instructions: { type: String },
  },
  { collection: "prescriptions", timestamps: true }
);

const Prescription = mongoose.model("Prescription", prescriptionSchema);

export default Prescription;
