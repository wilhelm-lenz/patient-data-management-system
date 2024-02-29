import mongoose from "mongoose";
import MedicalDocument from "../models/MedicalDocument.js";

export const findAll = async () => {
  const foundedMedicalDocuments = MedicalDocument.find();
  return foundedMedicalDocuments;
};

const findOne = async (medicalDocumentId) => {
  console.log(medicalDocumentId);
  const foundedOneMedicalDocument = await MedicalDocument.findById({
    _id: mongoose.Types.ObjectId.createFromHexString(medicalDocumentId),
  });
  console.log(foundedOneMedicalDocument);
  return foundedOneMedicalDocument;
};

const insertOne = async (newMedicalDocument) => {
  const insertMedicalDocument = await MedicalDocument.create(
    newMedicalDocument
  );
  return insertMedicalDocument;
};

const updateOneOrMany = async (
  medicalDocumentId,
  medicalDocumentForUpdateData
) => {
  const updatedMedicalDocument = await MedicalDocument.findByIdAndUpdate(
    mongoose.Types.ObjectId.createFromHexString(medicalDocumentId),
    medicalDocumentForUpdateData,
    { new: true }
  );
  if (!updatedMedicalDocument) throw new Error("MedicalDocument not found");
  else if (
    updatedMedicalDocument.status === "completed" ||
    updatedMedicalDocument.status === "cancelled"
  )
    await MedicalDocument.findByIdAndDelete(medicalDocumentId);

  return updatedMedicalDocument;
};

const deleteOne = async (medicalDocumentId) => {
  const deletedMedicalDocument =
    MedicalDocument.findByIdAndDelete(medicalDocumentId);
  return deletedMedicalDocument;
};

const medicalDocumentDAO = {
  findAll,
  findOne,
  insertOne,
  updateOneOrMany,
  deleteOne,
};

export default medicalDocumentDAO;
