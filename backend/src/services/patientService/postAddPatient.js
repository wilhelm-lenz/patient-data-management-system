import { PatientDAO } from "../../data-access/index.js";

export const postAddPatient = async () => {
  const newPatient = await PatientDAO.insertOne();
  return newPatient;
};
