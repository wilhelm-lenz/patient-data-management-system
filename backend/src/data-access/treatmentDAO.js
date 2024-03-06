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

  if (!foundedOneTreatment)
    throw new AppError("No Treatment found with that ID", NOT_FOUND);

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
  if (!updatedTreatment)
    throw new AppError("No Treatment found with that ID", BAD_REQUEST);
  else if (
    updatedTreatment.status === "completed" ||
    updatedTreatment.status === "cancelled"
  )
    await Treatment.findByIdAndDelete(treatmentId);

  return updatedTreatment;
};

const deleteOne = async (treatmentId) => {
  const deletedTreatment = Treatment.findByIdAndDelete(treatmentId);

  if (!deletedTreatment)
    throw new AppError("No Treatment found with that ID", NOT_FOUND);

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
