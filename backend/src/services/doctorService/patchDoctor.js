import { DoctorDAO } from "../../data-access/index.js";

export const patchDoctor = async (doctorId, updateDoctor) => {
  const updatedDoctor = await DoctorDAO.updateOne(doctorId, updateDoctor);
  return updatedDoctor;
};
