import mongoose from "mongoose";
import Medication from "../models/Medication.js";

export const findAll = async () => {
  const foundedMedications = Medication.find();
  return foundedMedications;
};

const findOne = async (medicationId) => {
  const foundedOneMedication = await Medication.findById({
    _id: mongoose.Types.ObjectId.createFromHexString(medicationId),
  });

  if (!foundedOneMedication)
    throw new AppError("No Medication found with that ID", NOT_FOUND);

  return foundedOneMedication;
};

const insertOne = async (newMedication) => {
  const insertMedication = await Medication.create(newMedication);
  return insertMedication;
};

const updateOneOrMany = async (medicationId, medicationForUpdateData) => {
  const updatedMedication = await Medication.findByIdAndUpdate(
    mongoose.Types.ObjectId.createFromHexString(medicationId),
    medicationForUpdateData,
    { new: true }
  );
  if (!updatedMedication)
    throw new AppError("No Medication found with that ID", BAD_REQUEST);
  else if (
    updatedMedication.status === "completed" ||
    updatedMedication.status === "cancelled"
  )
    await Medication.findByIdAndDelete(medicationId);

  return updatedMedication;
};

const deleteOne = async (medicationId) => {
  const deletedMedication = Medication.findByIdAndDelete(medicationId);

  if (!deletedMedication)
    throw new AppError("No Medication found with that ID", NOT_FOUND);

  return deletedMedication;
};

const medicationDAO = {
  findAll,
  findOne,
  insertOne,
  updateOneOrMany,
  deleteOne,
};

export default medicationDAO;
