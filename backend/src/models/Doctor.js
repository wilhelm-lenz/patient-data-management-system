import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      enum: {
        values: ["Dr", "Prof"],
        message: "Title is either: Dr, Prof",
      },
    },
    firstname: {
      type: String,
      require: [true, "A doctor must have a firstname"],
      trim: true,
      minlength: [2, "A doctor firstname must have more or equal 2 charcters"],
      maxlength: [
        200,
        "A doctor firstname must have less or equal 200 charcters",
      ],
    },
    lastname: {
      type: String,
      require: [true, "A doctor must have a lastname"],
      trim: true,
      minlength: [2, "A doctor lastname must have more or equal 2 charcters"],
      maxlength: [
        200,
        "A doctor lastname must have less or equal 200 charcters",
      ],
    },
    gender: {
      type: String,
      enum: {
        values: ["male", "female", "non-binary"],
        message: "Gender is either: male, female, non-binary",
      },
    },
    specialization: {
      type: String,
      require: [true, "A doctor must have a specialization"],
    },
    contactInformation: { type: Object },
    workingHours: { type: Object },
  },
  { collection: "doctors", timestamps: true }
);

const Doctor = mongoose.model("Doctor", doctorSchema);

export default Doctor;
