import mongoose from "mongoose";

const treatmentSchema = new mongoose.Schema(
  {
    patientId: { type: mongoose.Types.ObjectId },
    doctorId: { type: mongoose.Types.ObjectId },
    date: {
      type: String,
      require: [true, "A treatment must have a date"],
      trim: true,
      minlength: [6, "A treatment date must have more or equal 6 charcters"],
      maxlength: [12, "A treatment date must have less or equal 12 charcters"],
    },
    time: {
      type: String,
      require: [true, "A treatment must have a time"],
      trim: true,
      minlength: [1, "A treatment time must have more or equal 1 charcters"],
      maxlength: [6, "A treatment time must have less or equal 6 charcters"],
    },
    diagnosis: {
      type: String,
      require: [true, "A treatment must have a diagnosis"],
      trim: true,
      minlength: [
        2,
        "A treatment diagnosis must have more or equal 2 charcters",
      ],
      maxlength: [
        200,
        "A treatment diagnosis must have less or equal 200 charcters",
      ],
    },
    treatmentCourse: {
      type: String,
      require: [true, "A treatment must have a treatment course"],
      trim: true,
      minlength: [2, "A treatment course must have more or equal 2 charcters"],
      maxlength: [
        200,
        "A treatment course must have less or equal 200 charcters",
      ],
    },
  },
  { collection: "treatments", timestamps: true }
);

const Treatment = mongoose.model("Treatment", treatmentSchema);

export default Treatment;
