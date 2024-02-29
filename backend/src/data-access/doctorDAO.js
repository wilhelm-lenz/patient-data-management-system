import mongoose from "mongoose";
import Doctor from "../models/Doctor.js";

export const findAll = async () => {
  const foundedDoctors = Doctor.find();
  return foundedDoctors;
};

const findOne = async (doctorId) => {
  console.log(doctorId);
  const foundedOneDoctor = await Doctor.findById({
    _id: mongoose.Types.ObjectId.createFromHexString(doctorId),
  });
  console.log(foundedOneDoctor);
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
  if (!updatedDoctor) throw new Error("Doctor not found");
  else if (
    updatedDoctor.status === "completed" ||
    updatedDoctor.status === "cancelled"
  )
    await Doctor.findByIdAndDelete(doctorId);

  return updatedDoctor;
};

const deleteOne = async (doctorId) => {
  const deletedDoctor = Doctor.findByIdAndDelete(doctorId);
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
