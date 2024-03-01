import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema(
  {
    title: { type: String, enum: ["Dr", "Prof"] },
    firstname: {
      type: String,
      require: [true || "A doctor must have a firstname"],
      trim: true,
    },
    lastname: {
      type: String,
      require: [true || "An doctor must have a lastname"],
      trim: true,
    },
    gender: { type: String, enum: ["male", "female", "non-binary"] },
    specialization: {
      type: String,
      require: [true || "An doctor must have a specialization"],
    },
    contactInformation: { type: Object },
    workingHours: { type: Object },
  },
  { collection: "doctors", timestamps: true }
);

const Doctor = mongoose.model("Doctor", doctorSchema);

export default Doctor;
