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
  console.log(foundedOnePrescription);
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
  if (!updatedPrescription) throw new Error("Prescription not found");
  else if (
    updatedPrescription.status === "completed" ||
    updatedPrescription.status === "cancelled"
  )
    await Prescription.findByIdAndDelete(prescriptionId);

  return updatedPrescription;
};

const deleteOne = async (prescriptionId) => {
  const deletedPrescription = Prescription.findByIdAndDelete(prescriptionId);
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
