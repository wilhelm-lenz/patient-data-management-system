import mongoose from "mongoose";
import Prescription from "../models/Prescription.js";

export const findAll = async () => {
  const foundedPrescriptions = Prescription.find();
  return foundedPrescriptions;
};

const findOne = async (prescriptionId) => {
  const foundedOnePrescription = await Prescription.findById({
    _id: mongoose.Types.ObjectId.createFromHexString(prescriptionId),
  });

  if (!foundedOnePrescription)
    throw new AppError("No Prescription found with that ID", NOT_FOUND);

  return foundedOnePrescription;
};

const insertOne = async (newPrescription) => {
  const insertPrescription = await Prescription.create(newPrescription);
  return insertPrescription;
};

const updateOneOrMany = async (prescriptionId, prescriptionForUpdateData) => {
  const updatedPrescription = await Prescription.findByIdAndUpdate(
    mongoose.Types.ObjectId.createFromHexString(prescriptionId),
    prescriptionForUpdateData,
    { new: true }
  );
  if (!updatedPrescription)
    throw new AppError("No Prescription found with that ID", BAD_REQUEST);
  else if (
    updatedPrescription.status === "completed" ||
    updatedPrescription.status === "cancelled"
  )
    await Prescription.findByIdAndDelete(prescriptionId);

  return updatedPrescription;
};

const deleteOne = async (prescriptionId) => {
  const deletedPrescription = Prescription.findByIdAndDelete(prescriptionId);

  if (!deletedPrescription)
    throw new AppError("No Prescription found with that ID", NOT_FOUND);

  return deletedPrescription;
};

const prescriptionDAO = {
  findAll,
  findOne,
  insertOne,
  updateOneOrMany,
  deleteOne,
};

export default prescriptionDAO;
