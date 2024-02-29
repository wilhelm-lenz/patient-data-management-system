import mongoose from "mongoose";
import Employee from "../models/Employee.js";

export const findAll = async () => {
  const foundedEmployees = Employee.find();
  return foundedEmployees;
};

const findOne = async (employeeId) => {
  console.log(employeeId);
  const foundedOneEmployee = await Employee.findById({
    _id: mongoose.Types.ObjectId.createFromHexString(employeeId),
  });
  console.log(foundedOneEmployee);
  return foundedOneEmployee;
};

const insertOne = async (newEmployee) => {
  const insertEmployee = await Employee.create(newEmployee);
  return insertEmployee;
};

const updateOneOrMany = async (employeeId, employeeForUpdateData) => {
  const updatedEmployee = await Employee.findByIdAndUpdate(
    mongoose.Types.ObjectId.createFromHexString(employeeId),
    employeeForUpdateData,
    { new: true }
  );
  if (!updatedEmployee) throw new Error("Employee not found");
  else if (
    updatedEmployee.status === "completed" ||
    updatedEmployee.status === "cancelled"
  )
    await Employee.findByIdAndDelete(employeeId);

  return updatedEmployee;
};

const deleteOne = async (employeeId) => {
  const deletedEmployee = Employee.findByIdAndDelete(employeeId);
  return deletedEmployee;
};

const employeeDAO = {
  findAll,
  findOne,
  insertOne,
  updateOneOrMany,
  deleteOne,
};

export default employeeDAO;
