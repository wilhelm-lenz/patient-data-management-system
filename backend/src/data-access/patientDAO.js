import mongoose from "mongoose";
import Patient from "../models/Patient.js";

export const findAll = async () => {
  const foundedPatients = Patient.find();
  return foundedPatients;
};

const findOne = async (patientId) => {
  const foundedOnePatient = await Patient.findById({
    _id: mongoose.Types.ObjectId.createFromHexString(patientId),
  });

  if (!foundedOnePatient)
    throw new AppError("No Patient found with that ID", NOT_FOUND);

  return foundedOnePatient;
};

const insertOne = async (newPatient) => {
  const insertPatient = await Patient.create(newPatient);
  return insertPatient;
};

const updateOneOrMany = async (patientId, patientForUpdateData) => {
  const updatedPatient = await Patient.findByIdAndUpdate(
    mongoose.Types.ObjectId.createFromHexString(patientId),
    patientForUpdateData,
    { new: true }
  );
  if (!updatedPatient)
    throw new AppError("No Patient found with that ID", BAD_REQUEST);
  else if (
    updatedPatient.status === "completed" ||
    updatedPatient.status === "cancelled"
  )
    await Patient.findByIdAndDelete(patientId);

  return updatedPatient;
};

const deleteOne = async (patientId) => {
  const deletedPatient = Patient.findByIdAndDelete(patientId);

  if (!deletedPatient)
    throw new AppError("No Patient found with that ID", NOT_FOUND);

  return deletedPatient;
};

const patientDAO = {
  findAll,
  findOne,
  insertOne,
  updateOneOrMany,
  deleteOne,
};

export default patientDAO;
