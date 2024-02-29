import mongoose from "mongoose";
import Treatment from "../models/Treatment.js";

export const findAll = async () => {
  const foundedTreatments = Treatment.find();
  return foundedTreatments;
};

const findOne = async (treatmentId) => {
  const foundedOneTreatment = await Treatment.findById({
    _id: mongoose.Types.ObjectId.createFromHexString(treatmentId),
  });
  console.log(foundedOneTreatment);
  return foundedOneTreatment;
};

const insertOne = async (newTreatment) => {
  const insertTreatment = await Treatment.create(newTreatment);
  return insertTreatment;
};

const updateOneOrMany = async (treatmentId, treatmentForUpdateData) => {
  const updatedTreatment = await Treatment.findByIdAndUpdate(
    mongoose.Types.ObjectId.createFromHexString(treatmentId),
    treatmentForUpdateData,
    { new: true }
  );
  if (!updatedTreatment) throw new Error("Treatment not found");
  else if (
    updatedTreatment.status === "completed" ||
    updatedTreatment.status === "cancelled"
  )
    await Treatment.findByIdAndDelete(treatmentId);

  return updatedTreatment;
};

const deleteOne = async (treatmentId) => {
  const deletedTreatment = Treatment.findByIdAndDelete(treatmentId);
  return deletedTreatment;
};

const treatmentDAO = {
  findAll,
  findOne,
  insertOne,
  updateOneOrMany,
  deleteOne,
};

export default treatmentDAO;
