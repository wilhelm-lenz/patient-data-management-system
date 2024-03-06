import mongoose from "mongoose";
import Appointment from "../models/Appointment.js";
import AppError from "../utils/AppError.js";
import { BAD_REQUEST, NOT_FOUND } from "./httpStatusCodes.js";

export const findAll = async () => {
  const foundedAppointments = await Appointment.find();
  // if (foundedAppointments.length === 0)
  //   throw new Error("No Appointments Found");
  return foundedAppointments;
};

const findOne = async (appointmentId) => {
  const foundedOneAppointment = await Appointment.findById({
    _id: mongoose.Types.ObjectId.createFromHexString(appointmentId),
  });

  // if (!foundedOneAppointment)
  //   throw new AppError("No Appointment found with that ID", NOT_FOUND);

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
  if (!updatedAppointment)
    throw new AppError("No Appointment found with that ID", BAD_REQUEST);
  else if (
    updatedAppointment.status === "completed" ||
    updatedAppointment.status === "cancelled"
  )
    await Appointment.findByIdAndDelete(appointmentId);

  return updatedAppointment;
};

const deleteOne = async (appointmentId) => {
  const deletedAppointment = await Appointment.findByIdAndDelete(appointmentId);

  if (!deletedAppointment)
    throw new AppError("No Appointment found with that ID", NOT_FOUND);

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
