import { PatientDAO } from "../../data-access/index.js";

export const getAllPatients = async () => {
  const allPatients = await PatientDAO.findAll();
  return allPatients;
};
