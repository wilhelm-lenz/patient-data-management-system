import express from "express";
import { TreatmentController } from "../controllers/index.js";

const router = express.Router();

router
  .route("/")
  .get(TreatmentController.getAllTreatmentsCtrl)
  .post(TreatmentController.postCreateTreatmentCtrl);

router
  .route("/:id")
  .get(TreatmentController.getOneTreatmentCtrl)
  .patch(TreatmentController.patchTreatmentCtrl)
  .delete(TreatmentController.deleteTreatmentCtrl);

export default router;
