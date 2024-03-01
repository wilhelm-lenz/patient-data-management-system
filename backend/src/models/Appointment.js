import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema(
  {
    patientId: { type: mongoose.Types.ObjectId },
    doctorId: { type: mongoose.Types.ObjectId },
    appointmentDate: {
      type: String,
      required: [true || "An appointment must have a Date"],
    },
    appointmentTime: {
      type: String,
      required: [true || "An appointment must have a Time"],
    },
    reasonForAppointment: { type: String, trim: true },
    status: {
      type: String,
      enum: ["scheduled", "cancelled", "completed"],
      require: [true || "An appointment must have a Status"],
    },
  },
  { collection: "appointments", timestamps: true }
);

const Appointment = mongoose.model("Appointment", appointmentSchema);

export default Appointment;
