import { MedicalDocumentDAO } from "../../data-access/index.js";

export const getOneMedicalDocument = async (medicalDocumentId) => {
  const oneMedicalDocument = await MedicalDocumentDAO.findOne(
    medicalDocumentId
  );
  return oneMedicalDocument;
};
