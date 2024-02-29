import { MedicalDocumentDAO } from "../../data-access/index.js";

export const getAllMedicalDocuments = async () => {
  const allMedicalDocuments = await MedicalDocumentDAO.findAll();
  return allMedicalDocuments;
};
