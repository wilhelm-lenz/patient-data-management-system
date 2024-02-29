import { PrescriptionDAO } from "../../data-access/index.js";

export const deletePrescription = async (prescriptionId) => {
  const deletedPrescription = await PrescriptionDAO.deleteOne(prescriptionId);
  return deletedPrescription;
};
