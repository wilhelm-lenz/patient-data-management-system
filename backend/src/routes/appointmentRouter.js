import express from "express";
import { AppointmentController } from "../controllers/index.js";
import { protectJWTAuth, restrictTo } from "../middlewares/index.js";

const router = express.Router();

router
  .route("/")
  .get(protectJWTAuth, AppointmentController.getAllAppointmentsCtrl)
  .post(AppointmentController.postCreateAppointmentCtrl);

router
  .route("/:id")
  .get(AppointmentController.getOneAppointmentCtrl)
  .patch(AppointmentController.patchAppointmentCtrl)
  .delete(
    protectJWTAuth,
    restrictTo("admin", "employee"),
    AppointmentController.deleteAppointmentCtrl
  );

export default router;
