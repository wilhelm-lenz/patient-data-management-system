import { AppointmentDAO } from "../../data-access/index.js";
import { createAppointmentPayload } from "../../helpers/createAppointmentPayload.js";

export const patchAppointment = async (
  appointmentId,
  updateAppointmentInfo
) => {
  const fields = [
    "_id",
    "appointmentDate",
    "appointmentTime",
    "reasonForAppointment",
    "status",
  ];

  const appointmentForUpdateData = createAppointmentPayload(
    updateAppointmentInfo,
    fields
  );

  const allAppointments = await AppointmentDAO.updateOneOrMany(
    appointmentId,
    appointmentForUpdateData
  );
  return allAppointments;
};
