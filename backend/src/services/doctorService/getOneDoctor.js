import { DoctorDAO } from "../../data-access/index.js";

export const getOneDoctor = async (doctorId) => {
  const oneDoctor = await DoctorDAO.findOne(doctorId);
  return oneDoctor;
};
