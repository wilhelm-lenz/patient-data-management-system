import { TreatmentDAO } from "../../data-access/index.js";

export const deleteTreatment = async (treatmentId) => {
  const deletedTreatment = await TreatmentDAO.deleteOne(treatmentId);
  return deletedTreatment;
};
