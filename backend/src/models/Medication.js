import mongoose from "mongoose";

const medicationSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: [true, "A medication must have a name"],
      trim: true,
      minlength: [2, "A medication name must have more or equal 2 charcters"],
      maxlength: [
        200,
        "A medication name must have less or equal 200 charcters",
      ],
    },
    activeIngredient: {
      type: String,
      require: [true, "A medication must have a active ingredient"],
      trim: true,
      minlength: [
        2,
        "A medication ingredient must have more or equal 2 charcters",
      ],
      maxlength: [
        200,
        "A medication ingredient must have less or equal 200 charcters",
      ],
    },
    dosage: {
      type: String,
      require: [true, "A medication must have a dosage"],
      trim: true,
      minlength: [2, "A medication dosage must have more or equal 2 charcters"],
      maxlength: [
        200,
        "A medication dosage must have less or equal 200 charcters",
      ],
    },
    sideEffects: {
      type: String,
      require: [true, "A medication must have side effects"],
      trim: true,
      minlength: [
        10,
        "Medication side effects must have more or equal 10 charcters",
      ],
      maxlength: [
        400,
        "Medication side effects must have less or equal 400 charcters",
      ],
    },
  },
  { collection: "medications", timestamps: true }
);

const Medication = mongoose.model("Medication", medicationSchema);

export default Medication;
