import Patient from "../models/Patient.js";
import { filterObjectByFields } from "../utils/filterObjectByFields.js";

export const prepareMedicalDocumentObject = async (
  newMedicalDocument,
  fields = []
) => {
  const patient = await Patient.findById(newMedicalDocument.patientId);
  if (!patient) {
    throw new Error("patient not found");
  }

  const baseObj = {
    _id: newMedicalDocument._id,
    patientId: patient._id,
    documentType: newMedicalDocument.documentType,
    dateOfCreation: Date.now(),
    filePath: newMedicalDocument.filePath,
  };

  return filterObjectByFields(baseObj, fields);
};
