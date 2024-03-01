import { AppointmentDAO } from "../../data-access/index.js";
import { prepareAppointmentObject } from "../../helpers/prepareAppointmentObject.js";

export const postAddAppointment = async (newAppointmentInfo) => {
  const fields = [
    "patientId",
    "doctorId",
    "appointmentDate",
    "appointmentTime",
    "reasonForAppointment",
    "status",
  ];

  // if (condition) {
  // }

  const appointment = await prepareAppointmentObject(
    newAppointmentInfo,
    fields
  );
  const newAppointment = await AppointmentDAO.insertOne(appointment);

  return newAppointment;
};
