import { MedicalDocumentDAO } from "../../data-access/index.js";
import { prepareMedicalDocumentObject } from "../../helpers/prepareMedicalDocumentObject.js";

export const postAddMedicalDocument = async (newMedicalDocumentInfo) => {
  const fields = ["patientId", "documentType", "dateOfCreation", "filePath"];

  const medicalDocumentForUpdateData = await prepareMedicalDocumentObject(
    newMedicalDocumentInfo,
    fields
  );

  const newMedicalDocument = await MedicalDocumentDAO.insertOne(
    medicalDocumentForUpdateData
  );
  return newMedicalDocument;
};
