import express from "express";
import { PrescriptionController } from "../controllers/index.js";

const router = express.Router();

router
  .route("/")
  .get(PrescriptionController.getAllPrescriptionsCtrl)
  .post(PrescriptionController.postCreatePrescriptionCtrl);

router
  .route("/:id")
  .get(PrescriptionController.getOnePrescriptionCtrl)
  .patch(PrescriptionController.patchPrescriptionCtrl)
  .delete(PrescriptionController.deletePrescriptionCtrl);

export default router;
