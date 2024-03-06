import mongoose from "mongoose";
import Doctor from "../models/Doctor.js";

export const findAll = async () => {
  const foundedDoctors = Doctor.find();
  return foundedDoctors;
};

const findOne = async (doctorId) => {
  const foundedOneDoctor = await Doctor.findById({
    _id: mongoose.Types.ObjectId.createFromHexString(doctorId),
  });

  if (!foundedOneDoctor)
    throw new AppError("No Doctor found with that ID", NOT_FOUND);

  return foundedOneDoctor;
};

const insertOne = async (newDoctor) => {
  const insertDoctor = await Doctor.create(newDoctor);
  return insertDoctor;
};

const updateOneOrMany = async (doctorId, doctorForUpdateData) => {
  const updatedDoctor = await Doctor.findByIdAndUpdate(
    mongoose.Types.ObjectId.createFromHexString(doctorId),
    doctorForUpdateData,
    { new: true }
  );
  if (!updatedDoctor)
    throw new AppError("No Doctor found with that ID", BAD_REQUEST);

  // else if (
  //   updatedDoctor.status === "completed" ||
  //   updatedDoctor.status === "cancelled"
  // )
  //   await Doctor.findByIdAndDelete(doctorId);

  return updatedDoctor;
};

const deleteOne = async (doctorId) => {
  const deletedDoctor = Doctor.findByIdAndDelete(doctorId);

  if (!deletedDoctor)
    throw new AppError("No Doctor found with that ID", NOT_FOUND);

  return deletedDoctor;
};

const doctorDAO = {
  findAll,
  findOne,
  insertOne,
  updateOneOrMany,
  deleteOne,
};

export default doctorDAO;
