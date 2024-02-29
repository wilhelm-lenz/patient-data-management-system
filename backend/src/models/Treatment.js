import mongoose from "mongoose";

const treatmentSchema = new mongoose.Schema(
  {
    patientId: { type: mongoose.Types.ObjectId },
    doctorId: { type: mongoose.Types.ObjectId },
    date: { type: String, required: true },
    time: { type: String, required: true },
    diagnosis: { type: String, required: true },
    treatmentCourse: { type: String, required: true },
  },
  { collection: "treatments", timestamps: true }
);

const Treatment = mongoose.model("Treatment", treatmentSchema);

export default Treatment;
