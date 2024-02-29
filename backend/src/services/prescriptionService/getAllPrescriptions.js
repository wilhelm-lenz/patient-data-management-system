import { PrescriptionDAO } from "../../data-access/index.js";

export const getAllPrescriptions = async () => {
  const allPrescriptions = await PrescriptionDAO.findAll();
  return allPrescriptions;
};
