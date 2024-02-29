import { AppointmentDAO } from "../../data-access/index.js";

export const getAllAppointments = async () => {
  const allAppointments = await AppointmentDAO.findAll();
  return allAppointments;
};
