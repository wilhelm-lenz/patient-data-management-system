import express from "express";
import cors from "cors";
import morgan from "morgan";
import {
  appointmentRouter,
  // authRouter,
  doctorRouter,
  employeeRouter,
  medicalDocumentRouter,
  medicationRouter,
  patientRouter,
  prescriptionRouter,
  treatmentRouter,
  userRouter,
} from "./src/routes/index.js";

const app = express();

app.use(cors());

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(express.static("./public"));

app.use(express.json());

app.use("/api/v1/appointments", appointmentRouter);
// app.use("/api/v1/auth", authRouter);
app.use("/api/v1/doctors", doctorRouter);
app.use("/api/v1/employees", employeeRouter);
app.use("/api/v1/medicalDocuments", medicalDocumentRouter);
app.use("/api/v1/medications", medicationRouter);
app.use("/api/v1/patients", patientRouter);
app.use("/api/v1/prescriptions", prescriptionRouter);
app.use("/api/v1/treatments", treatmentRouter);
app.use("/api/v1/users", userRouter);

app.use((_, res) => {
  res.status(404).json({ status: "fail", error: "Route not found" });
});

export default app;
