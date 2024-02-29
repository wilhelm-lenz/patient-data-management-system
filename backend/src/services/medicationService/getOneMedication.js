import { MedicationDAO } from "../../data-access/index.js";

export const getOneMedication = async (medicationId) => {
  const oneMedication = await MedicationDAO.findOne(medicationId);
  return oneMedication;
};
