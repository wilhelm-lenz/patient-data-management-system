import { DoctorDAO } from "../../data-access/index.js";

export const deleteDoctor = async (doctorId) => {
  const deletedDoctor = await DoctorDAO.deleteOne(doctorId);
  return deletedDoctor;
};
