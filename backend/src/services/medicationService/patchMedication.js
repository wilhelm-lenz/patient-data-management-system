import { MedicationDAO } from "../../data-access/index.js";
import { prepareMedicationObject } from "../../helpers/prepareMedicationObject.js";

export const patchMedication = async (medicationId, updateMedicationInfo) => {
  const fields = ["name", "activeIngredient", "dosage", "sideEffects"];

  const medicationForUpdateData = prepareMedicationObject(
    updateMedicationInfo,
    fields
  );

  const updatedMedication = await MedicationDAO.updateOneOrMany(
    medicationId,
    medicationForUpdateData
  );
  return updatedMedication;
};
