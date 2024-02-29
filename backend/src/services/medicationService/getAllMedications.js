import { MedicationDAO } from "../../data-access/index.js";

export const getAllMedications = async () => {
  const allMedications = await MedicationDAO.findAll();
  return allMedications;
};
