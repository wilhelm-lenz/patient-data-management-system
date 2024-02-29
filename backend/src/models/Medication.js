import mongoose from "mongoose";

const medicationSchema = new mongoose.Schema(
  {
    name: { type: String },
    activeIngredient: { type: String },
    dosage: { type: String },
    sideEffects: { type: String },
  },
  { collection: "medications", timestamps: true }
);

const Medication = mongoose.model("Medication", medicationSchema);

export default Medication;
