import { filterObjectByFields } from "../utils/filterObjectByFields.js";

export const prepareMedicationObject = (newMedication, fields = []) => {
  const baseObj = {
    _id: newMedication._id,
    name: newMedication.name,
    activeIngredient: newMedication.activeIngredient,
    dosage: newMedication.dosage,
    sideEffects: newMedication.sideEffects,
  };

  return filterObjectByFields(baseObj, fields);
};
