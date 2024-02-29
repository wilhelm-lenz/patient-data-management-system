import express from "express";
import { MedicalDocumentController } from "../controllers/index.js";

const router = express.Router();

router
  .route("/")
  .get(MedicalDocumentController.getAllMedicalDocumentsCtrl)
  .post(MedicalDocumentController.postCreateMedicalDocumentCtrl);

router
  .route("/:id")
  .get(MedicalDocumentController.getOneMedicalDocumentCtrl)
  .patch(MedicalDocumentController.patchMedicalDocumentCtrl)
  .delete(MedicalDocumentController.deleteMedicalDocumentCtrl);

export default router;
