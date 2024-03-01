import { MedicationDAO } from "../../data-access/index.js";
import { prepareMedicationObject } from "../../helpers/prepareMedicationObject.js";

export const postAddMedication = async (newMedicationInfo) => {
  const fields = ["name", "activeIngredient", "dosage", "sideEffects"];

  const medicationForUpdateData = prepareMedicationObject(
    newMedicationInfo,
    fields
  );

  const newMedication = await MedicationDAO.insertOne(medicationForUpdateData);
  return newMedication;
};
