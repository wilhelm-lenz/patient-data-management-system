import { MedicationDAO } from "../../data-access/index.js";

export const patchMedication = async (medicationId, updateMedication) => {
  const updatedMedication = await MedicationDAO.updateOne(
    medicationId,
    updateMedication
  );
  return updatedMedication;
};
