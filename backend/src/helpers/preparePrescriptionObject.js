import Medication from "../models/Medication.js";
import Treatment from "../models/Treatment.js";
import { filterObjectByFields } from "../utils/filterObjectByFields.js";

export const preparePrescriptionObject = async (
  newPrescription,
  fields = []
) => {
  const medication = await Medication.findById(newPrescription.medicationId);
  const treatment = await Treatment.findById(newPrescription.treatmentId);
  if (!medication || !treatment) {
    throw new Error("medication or treatment not found");
  }
  const baseObj = {
    _id: newPrescription._id,
    treatmentId: treatment._id,
    medicationId: medication._id,
    dosage: newPrescription.dosage,
    instructions: newPrescription.instructions,
  };

  return filterObjectByFields(baseObj, fields);
};
