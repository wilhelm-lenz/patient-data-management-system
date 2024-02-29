import express from "express";
import { MedicationController } from "../controllers/index.js";
const router = express.Router();

router
  .route("/")
  .get(MedicationController.getAllMedicationsCtrl)
  .post(MedicationController.postCreateMedicationCtrl);

router
  .route("/:id")
  .get(MedicationController.getOneMedicationCtrl)
  .patch(MedicationController.patchMedicationCtrl)
  .delete(MedicationController.deleteMedicationCtrl);

export default router;
