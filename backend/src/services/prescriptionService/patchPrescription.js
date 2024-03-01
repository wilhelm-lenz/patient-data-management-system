import { PrescriptionDAO } from "../../data-access/index.js";
import { preparePrescriptionObject } from "../../helpers/preparePrescriptionObject.js";

export const patchPrescription = async (
  prescriptionId,
  updatePrescriptionInfo
) => {
  const fields = ["treatmentId", "medicationId", "dosage", "instructions"];

  const prescriptionForUpdateData = await preparePrescriptionObject(
    updatePrescriptionInfo,
    fields
  );

  const updatedPrescription = await PrescriptionDAO.updateOneOrMany(
    prescriptionId,
    prescriptionForUpdateData
  );
  return updatedPrescription;
};
