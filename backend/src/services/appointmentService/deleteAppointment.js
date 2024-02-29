import { AppointmentDAO } from "../../data-access/index.js";

export const deleteAppointment = async (appointmentId) => {
  const deletedAppointment = await AppointmentDAO.deleteOne(appointmentId);
  return deletedAppointment;
};
