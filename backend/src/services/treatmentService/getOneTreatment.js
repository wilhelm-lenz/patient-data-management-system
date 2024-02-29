import { TreatmentDAO } from "../../data-access/index.js";

export const getOneTreatment = async (treatmentId) => {
  const oneTreatment = await TreatmentDAO.findOne(treatmentId);
  return oneTreatment;
};
