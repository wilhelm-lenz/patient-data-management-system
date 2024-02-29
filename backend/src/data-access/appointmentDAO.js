import mongoose from "mongoose";
import Appointment from "../models/Appointment.js";

export const findAll = async () => {
  const foundedAppointments = Appointment.find();
  return foundedAppointments;
};

const findOne = async (appointmentId) => {
  console.log(appointmentId);
  const foundedOneAppointment = await Appointment.findById({
    _id: mongoose.Types.ObjectId.createFromHexString(appointmentId),
  });
  console.log(foundedOneAppointment);
  return foundedOneAppointment;
};

const insertOne = async (newAppointment) => {
  const insertAppointment = await Appointment.create(newAppointment);
  return insertAppointment;
};

const updateOneOrMany = async (appointmentId, appointmentForUpdateData) => {
  const updatedAppointment = await Appointment.findByIdAndUpdate(
    mongoose.Types.ObjectId.createFromHexString(appointmentId),
    appointmentForUpdateData,
    { new: true }
  );
  if (!updatedAppointment) throw new Error("Appointment not found");
  else if (
    updatedAppointment.status === "completed" ||
    updatedAppointment.status === "cancelled"
  )
    await Appointment.findByIdAndDelete(appointmentId);

  return updatedAppointment;
};

const deleteOne = async (appointmentId) => {
  const deletedAppointment = Appointment.findByIdAndDelete(appointmentId);
  return deletedAppointment;
};

const appointmentDAO = {
  findAll,
  findOne,
  insertOne,
  updateOneOrMany,
  deleteOne,
};

export default appointmentDAO;
