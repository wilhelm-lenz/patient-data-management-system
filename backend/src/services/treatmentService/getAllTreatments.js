import { TreatmentDAO } from "../../data-access/index.js";

export const getAllTreatments = async () => {
  const allTreatments = await TreatmentDAO.findAll();
  return allTreatments;
};
