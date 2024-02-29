import { TreatmentDAO } from "../../data-access/index.js";

export const postAddTreatment = async () => {
  const newTreatment = await TreatmentDAO.insertOne();
  return newTreatment;
};
