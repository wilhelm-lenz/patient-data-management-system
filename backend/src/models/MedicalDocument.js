import mongoose from "mongoose";

const medicalDocumentSchema = new mongoose.Schema(
  {
    patientId: { type: mongoose.Types.ObjectId },
    documentType: {
      type: String,
      enum: ["x-ray", "testResult", "vaccinationRecord"],
    },
    dateOfCreation: { type: Date },
    filePath: { type: String },
  },
  { collection: "medicalDocuments", timestamps: true }
);

const MedicalDocument = mongoose.model(
  "MedicalDocument",
  medicalDocumentSchema
);

export default MedicalDocument;
