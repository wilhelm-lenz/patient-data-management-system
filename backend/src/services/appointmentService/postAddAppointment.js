import { AppointmentDAO } from "../../data-access/index.js";

import { createAppointmentPayload } from "../../helpers/createAppointmentPayload.js";

export const postAddAppointment = async (newAppointmentInfo) => {
  const fields = [
    "_id",
    "patientId",
    "doctorId",
    "appointmentDate",
    "appointmentTime",
    "reasonForAppointment",
    "status",
  ];

  const appointment = createAppointmentPayload(newAppointmentInfo, fields);

  const newAppointment = await AppointmentDAO.insertOne(appointment);
  return newAppointment;
};
