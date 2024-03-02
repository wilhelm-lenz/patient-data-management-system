import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema(
  {
    patientId: { type: mongoose.Types.ObjectId },
    doctorId: { type: mongoose.Types.ObjectId },
    appointmentDate: {
      type: String,
      required: [true, "An appointment must have a Date"],
      minlength: [6, "A appointment date must have more or equal 6 charcters"],
      maxlength: [
        12,
        "A appointment date must have less or equal 12 charcters",
      ],
    },
    appointmentTime: {
      type: String,
      required: [true, "An appointment must have a Time"],
      minlength: [1, "A appointment date must have more or equal 1 charcters"],
      maxlength: [6, "A appointment date must have less or equal 6 charcters"],
    },
    reasonForAppointment: {
      type: String,
      trim: true,
      minlength: [
        2,
        "An appointment reason must have more or equal 2 charcters",
      ],
      maxlength: [
        100,
        "An appointment reason must have less or equal 100 charcters",
      ],
    },
    status: {
      type: String,
      enum: {
        values: ["scheduled", "cancelled", "completed"],
        message: "Status is either: scheduled, cancelled, completed",
      },
      require: [true, "An appointment must have a Status"],
    },
  },
  { collection: "appointments", timestamps: true }
);

const Appointment = mongoose.model("Appointment", appointmentSchema);

export default Appointment;
