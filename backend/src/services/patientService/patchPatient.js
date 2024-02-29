import { PatientDAO } from "../../data-access/index.js";

export const patchPatient = async (patientId, updatePatient) => {
  const updatedPatient = await PatientDAO.updateOne(patientId, updatePatient);
  return updatedPatient;
};
