import { MedicationDAO } from "../../data-access/index.js";

export const deleteMedication = async (medicationId) => {
  const deletedMedication = await MedicationDAO.deleteOne(medicationId);
  return deletedMedication;
};
