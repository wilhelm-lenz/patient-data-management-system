import { MedicationDAO } from "../../data-access/index.js";

export const postAddMedication = async () => {
  const newMedication = await MedicationDAO.insertOne();
  return newMedication;
};
