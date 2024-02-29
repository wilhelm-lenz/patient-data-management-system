import express from "express";
import { PatientController } from "../controllers/index.js";

const router = express.Router();

router
  .route("/")
  .get(PatientController.getAllPatientsCtrl)
  .post(PatientController.postCreatePatientCtrl);

router
  .route("/:id")
  .get(PatientController.getOnePatientCtrl)
  .patch(PatientController.patchPatientCtrl)
  .delete(PatientController.deletePatientCtrl);

export default router;
