import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema(
  {
    patientId: { type: mongoose.Types.ObjectId },
    doctorId: { type: mongoose.Types.ObjectId },
    appointmentDate: { type: String, required: true },
    appointmentTime: { type: String, required: true },
    reasonForAppointment: { type: String },
    status: { type: String, enum: ["scheduled", "cancelled", "completed"] },
  },
  { collection: "appointments", timestamps: true }
);

const Appointment = mongoose.model("Appointment", appointmentSchema);

export default Appointment;
