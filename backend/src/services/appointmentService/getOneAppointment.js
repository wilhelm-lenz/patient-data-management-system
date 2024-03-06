import { AppointmentDAO } from "../../data-access/index.js";

export const getOneAppointment = async (appointmentId) => {
  const oneAppointment = await AppointmentDAO.findOne(appointmentId);

  return oneAppointment;
};
