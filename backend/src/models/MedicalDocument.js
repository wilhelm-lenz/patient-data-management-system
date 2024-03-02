import mongoose from "mongoose";

const medicalDocumentSchema = new mongoose.Schema(
  {
    patientId: { type: mongoose.Types.ObjectId },
    documentType: {
      type: String,
      // enum: ["x-ray", "testResult", "vaccinationRecord"],
      require: [true, "A medicalDocumentation must have a document type"],
      trim: true,
      minlength: [
        2,
        "A medical Document type must have more or equal 2 charcters",
      ],
      maxlength: [
        200,
        "A medical Document type must have less or equal 200 charcters",
      ],
    },
    dateOfCreation: {
      type: Date,
      require: [
        true,
        "A medicalDocumentation must have a document date of creation",
      ],
    },
    filePath: {
      type: String,
      trim: true,
      minlength: [
        2,
        "A medical Document file path must have more or equal 2 charcters",
      ],
      maxlength: [
        200,
        "A medical Document file path must have less or equal 200 charcters",
      ],
    },
  },
  { collection: "medicalDocuments", timestamps: true }
);

const MedicalDocument = mongoose.model(
  "MedicalDocument",
  medicalDocumentSchema
);

export default MedicalDocument;
