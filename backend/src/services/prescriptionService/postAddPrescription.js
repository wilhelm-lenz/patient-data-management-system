import { PrescriptionDAO } from "../../data-access/index.js";
import { preparePrescriptionObject } from "../../helpers/preparePrescriptionObject.js";

export const postAddPrescription = async (newPrescriptionInfo) => {
  const fields = ["treatmentId", "medicationId", "dosage", "instructions"];

  const prescriptionForUpdateData = await preparePrescriptionObject(
    newPrescriptionInfo,
    fields
  );

  const newPrescription = await PrescriptionDAO.insertOne(
    prescriptionForUpdateData
  );
  return newPrescription;
};
