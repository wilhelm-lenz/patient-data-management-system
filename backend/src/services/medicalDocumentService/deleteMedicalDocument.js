import { MedicalDocumentDAO } from "../../data-access/index.js";

export const deleteMedicalDocument = async (medicalDocumentId) => {
  const deletedMedicalDocument = await MedicalDocumentDAO.deleteOne(
    medicalDocumentId
  );
  return deletedMedicalDocument;
};
