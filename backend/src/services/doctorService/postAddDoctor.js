import { DoctorDAO } from "../../data-access/index.js";

export const postAddDoctor = async () => {
  const newDoctor = await DoctorDAO.insertOne();
  return newDoctor;
};
