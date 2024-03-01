import { MedicalDocumentDAO } from "../../data-access/index.js";
import { prepareMedicalDocumentObject } from "../../helpers/prepareMedicalDocumentObject.js";

export const patchMedicalDocument = async (
  medicalDocumentId,
  updateMedicalDocumentInfo
) => {
  const fields = ["patientId", "documentType", "dateOfCreation", "filePath"];

  const medicalDocumentForUpdateData = await prepareMedicalDocumentObject(
    updateMedicalDocumentInfo,
    fields
  );

  const updatedMedicalDocument = await MedicalDocumentDAO.updateOneOrMany(
    medicalDocumentId,
    medicalDocumentForUpdateData
  );
  return updatedMedicalDocument;
};
