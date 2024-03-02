import mongoose from "mongoose";

const prescriptionSchema = new mongoose.Schema(
  {
    treatmentId: { type: mongoose.Types.ObjectId },
    medicationId: { type: mongoose.Types.ObjectId },
    dosage: {
      type: String,
      require: [true, "A prescription must have a dosage"],
      trim: true,
      minlength: [
        2,
        "A prescription dosage must have more or equal 2 charcters",
      ],
      maxlength: [
        200,
        "A prescription dosage must have less or equal 200 charcters",
      ],
    },

    instructions: {
      type: String,
      require: [true, "A prescription must have a instructions"],
      trim: true,
      minlength: [
        2,
        "A prescription instruction must have more or equal 2 charcters",
      ],
      maxlength: [
        200,
        "A prescription instruction must have less or equal 200 charcters",
      ],
    },
  },
  { collection: "prescriptions", timestamps: true }
);

const Prescription = mongoose.model("Prescription", prescriptionSchema);

export default Prescription;
