import mongoose from "mongoose";

const medicalDocumentSchema = new mongoose.Schema(
  {
    patientId: { type: mongoose.Types.ObjectId },
    documentType: {
      type: String,
      enum: ["x-ray", "testResult", "vaccinationRecord"],
      require: [true || "A medicalDocumentation must have a document type"],
      trim: true,
    },
    dateOfCreation: {
      type: Date,
      require: [
        true || "A medicalDocumentation must have a document date of creation",
      ],
    },
    filePath: { type: String, trim: true },
  },
  { collection: "medicalDocuments", timestamps: true }
);

const MedicalDocument = mongoose.model(
  "MedicalDocument",
  medicalDocumentSchema
);

export default MedicalDocument;
