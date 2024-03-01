import { PatientDAO } from "../../data-access/index.js";
import { preparePatientObject } from "../../helpers/preparePatientObject.js";

export const postAddPatient = async (newPatientInfo) => {
  const fields = [
    "firstname",
    "lastname",
    "dateOfBirth",
    "gender",
    "address",
    "contactInformation",
    "insuranceInformation",
  ];

  const patientForUpdateData = preparePatientObject(newPatientInfo, fields);

  const newPatient = await PatientDAO.insertOne(patientForUpdateData);
  return newPatient;
};
