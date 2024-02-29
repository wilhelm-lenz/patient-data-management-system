import { MedicalDocumentDAO } from "../../data-access/index.js";

export const patchMedicalDocument = async (
  medicalDocumentId,
  updateMedicalDocument
) => {
  const updatedMedicalDocument = await MedicalDocumentDAO.updateOne(
    medicalDocumentId,
    updateMedicalDocument
  );
  return updatedMedicalDocument;
};
