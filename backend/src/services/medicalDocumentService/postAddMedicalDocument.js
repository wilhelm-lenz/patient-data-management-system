import { MedicalDocumentDAO } from "../../data-access/index.js";

export const postAddMedicalDocument = async () => {
  const newMedicalDocument = await MedicalDocumentDAO.insertOne();
  return newMedicalDocument;
};
