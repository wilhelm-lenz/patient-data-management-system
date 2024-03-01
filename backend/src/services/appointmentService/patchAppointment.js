import { AppointmentDAO } from "../../data-access/index.js";
import { prepareAppointmentObject } from "../../helpers/prepareAppointmentObject.js";

export const patchAppointment = async (
  appointmentId,
  updateAppointmentInfo
) => {
  const fields = [
    "patientId",
    "doctorId",
    "appointmentDate",
    "appointmentTime",
    "reasonForAppointment",
    "status",
  ];

  const appointmentForUpdateData = await prepareAppointmentObject(
    updateAppointmentInfo,
    fields
  );

  const updateAppointment = await AppointmentDAO.updateOneOrMany(
    appointmentId,
    appointmentForUpdateData
  );

  return updateAppointment;
};
