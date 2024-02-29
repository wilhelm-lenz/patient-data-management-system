import { PatientDAO } from "../../data-access/index.js";

export const deletePatient = async (patientId) => {
  const deletedPatient = await PatientDAO.deleteOne(patientId);
  return deletedPatient;
};
