import express from "express";
import { DoctorController } from "../controllers/index.js";

const router = express.Router();

router
  .route("/")
  .get(DoctorController.getAllDoctorsCtrl)
  .post(DoctorController.postCreateDoctorCtrl);

router
  .route("/:id")
  .get(DoctorController.getOneDoctorCtrl)
  .patch(DoctorController.patchDoctorCtrl)
  .delete(DoctorController.deleteDoctorCtrl);

export default router;
