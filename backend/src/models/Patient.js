import mongoose from "mongoose";

const patientSchema = new mongoose.Schema(
  {
    firstname: {
      type: String,
      require: [true, "A patient must have a firstname"],
      trim: true,
      minlength: [2, "A patient firstname must have more or equal 2 charcters"],
      maxlength: [
        200,
        "A patient firstname must have less or equal 200 charcters",
      ],
    },
    lastname: {
      type: String,
      require: [true, "A patient must have a lastname"],
      trim: true,
      minlength: [2, "A patient lastname must have more or equal 2 charcters"],
      maxlength: [
        200,
        "A patient lastname must have less or equal 200 charcters",
      ],
    },
    dateOfBirth: {
      type: String,
      require: [true, "A patient must have a date of birth"],
      trim: true,
      minlength: [
        6,
        "A patient date of birth must have more or equal 6 charcters",
      ],
      maxlength: [
        12,
        "A patient date of birth must have less or equal 12 charcters",
      ],
    },
    gender: {
      type: String,
      enum: {
        values: ["male", "female", "non-binary"],
        message: "Gender is either: male, female, non-binary",
      },
    },
    address: { type: Object },
    contactInformation: { type: Object },
    insuranceInformation: {
      type: Object,
      require: [true, "A patient must have a insurance information"],
    },
  },
  { collection: "patients", timestamps: true }
);

const Patient = mongoose.model("Patient", patientSchema);

export default Patient;
