import { PrescriptionDAO } from "../../data-access/index.js";

export const patchPrescription = async (prescriptionId, updatePrescription) => {
  const updatedPrescription = await PrescriptionDAO.updateOne(
    prescriptionId,
    updatePrescription
  );
  return updatedPrescription;
};
