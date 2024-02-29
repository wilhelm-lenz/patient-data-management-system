import mongoose from "mongoose";

export const createAppointmentPayload = (newAppointment, fields = []) => {
  const baseObj = {
    _id: newAppointment._id,
    patientId: newAppointment.patientId,
    doctorId: newAppointment.doctorId,
    appointmentDate: newAppointment.appointmentDate,
    appointmentTime: newAppointment.appointmentTime,
    reasonForAppointment: newAppointment.reasonForAppointment,
    status: newAppointment.status,
  };

  // If no specific fields were requested, return the complete object
  if (fields.length === 0) return baseObj;

  // Creates a new object containing only the requested fields
  const filteredObj = {};
  fields.forEach((field) => {
    if (baseObj[field] !== undefined) {
      filteredObj[field] = baseObj[field];
    }
  });

  return filteredObj;
};
