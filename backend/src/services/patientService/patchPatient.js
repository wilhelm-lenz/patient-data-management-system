import { PatientDAO } from "../../data-access/index.js";
import { preparePatientObject } from "../../helpers/preparePatientObject.js";

export const patchPatient = async (patientId, updatePatientInfo) => {
  const fields = [
    "firstname",
    "lastname",
    "dateOfBirth",
    "gender",
    "address",
    "contactInformation",
    "insuranceInformation",
  ];

  const patientForUpdateData = preparePatientObject(updatePatientInfo, fields);

  const updatedPatient = await PatientDAO.updateOneOrMany(
    patientId,
    patientForUpdateData
  );
  return updatedPatient;
};
