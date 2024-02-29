import { PrescriptionDAO } from "../../data-access/index.js";

export const getOnePrescription = async (prescriptionId) => {
  const onePrescription = await PrescriptionDAO.findOne(prescriptionId);
  return onePrescription;
};
