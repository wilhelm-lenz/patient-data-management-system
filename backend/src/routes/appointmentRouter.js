import express from "express";
import { AppointmentController } from "../controllers/index.js";

const router = express.Router();

router
  .route("/")
  .get(AppointmentController.getAllAppointmentsCtrl)
  .post(AppointmentController.postCreateAppointmentCtrl);

router
  .route("/:id")
  .get(AppointmentController.getOneAppointmentCtrl)
  .patch(AppointmentController.patchAppointmentCtrl)
  .delete(AppointmentController.deleteAppointmentCtrl);

export default router;
