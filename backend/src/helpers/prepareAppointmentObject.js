import Doctor from "../models/Doctor.js";
import Patient from "../models/Patient.js";
import { filterObjectByFields } from "../utils/filterObjectByFields.js";

export const prepareAppointmentObject = async (newAppointment, fields = []) => {
  const patient = await Patient.findById(newAppointment.patientId);
  const doctor = await Doctor.findById(newAppointment.doctorId);

  if (!patient || !doctor) {
    throw new Error("patient or doctor not found");
  }

  const baseObj = {
    _id: newAppointment._id,
    patientId: patient._id,
    doctorId: doctor._id,
    appointmentDate: newAppointment.appointmentDate,
    appointmentTime: newAppointment.appointmentTime,
    reasonForAppointment: newAppointment.reasonForAppointment,
    status: newAppointment.status,
  };

  return filterObjectByFields(baseObj, fields);
};
