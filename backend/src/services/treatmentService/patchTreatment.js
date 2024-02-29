import { TreatmentDAO } from "../../data-access/index.js";

export const patchTreatment = async (treatmentId, updateTreatment) => {
  const updatedTreatment = await TreatmentDAO.updateOne(
    treatmentId,
    updateTreatment
  );
  return updatedTreatment;
};
