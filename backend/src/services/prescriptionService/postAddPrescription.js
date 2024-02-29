import { PrescriptionDAO } from "../../data-access/index.js";

export const postAddPrescription = async () => {
  const newPrescription = await PrescriptionDAO.insertOne();
  return newPrescription;
};
