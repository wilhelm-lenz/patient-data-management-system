import mongoose from "mongoose";

const medicationSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: [true || "A medication must have a name"],
      trim: true,
    },
    activeIngredient: {
      type: String,
      require: [true || "A medication must have a active ingredient"],
      trim: true,
    },
    dosage: {
      type: String,
      require: [true || "A medication must have a dosage"],
      trim: true,
    },
    sideEffects: {
      type: String,
      require: [true || "A medication must have a sideEffects"],
      trim: true,
    },
  },
  { collection: "medications", timestamps: true }
);

const Medication = mongoose.model("Medication", medicationSchema);

export default Medication;
