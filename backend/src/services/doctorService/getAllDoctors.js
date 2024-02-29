import { DoctorDAO } from "../../data-access/index.js";

export const getAllDoctors = async () => {
  const allDoctors = await DoctorDAO.findAll();
  return allDoctors;
};
