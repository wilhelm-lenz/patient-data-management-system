import { PatientDAO } from "../../data-access/index.js";

export const getOnePatient = async (patientId) => {
  const onePatient = await PatientDAO.findOne(patientId);
  return onePatient;
};
