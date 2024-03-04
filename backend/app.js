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
import AppError from "./src/utils/AppError.js";
import ErrorController from "./src/controllers/ErrorController.js";
import { NOT_FOUND } from "./src/data-access/httpStatusCodes.js";

const app = express();

app.use(cors());

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(express.json());
app.use(express.static(`./public`));

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

app.all("*", (req, res, next) => {
  next(
    new AppError(
      `Can't find Route ${req.originalUrl} on this server!`,
      NOT_FOUND
    )
  );
});

// Global Error Handling Middleware
app.use(ErrorController.globalErrorCtrl);

export default app;
