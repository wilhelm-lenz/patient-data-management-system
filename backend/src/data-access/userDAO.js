import mongoose from "mongoose";
import User from "../models/User.js";

export const findAll = async () => {
  const foundedUsers = User.find();
  return foundedUsers;
};

const findOne = async (userId) => {
  const foundedOneUser = await User.findById({
    _id: mongoose.Types.ObjectId.createFromHexString(userId),
  });
  return foundedOneUser;
};

const insertOne = async (newUser) => {
  const insertUser = await User.create(newUser);
  return insertUser;
};

const updateOneOrMany = async (userId, userForUpdateData) => {
  const updatedUser = await User.findByIdAndUpdate(
    mongoose.Types.ObjectId.createFromHexString(userId),
    userForUpdateData,
    { new: true }
  );
  if (!updatedUser) throw new Error("User not found");
  else if (
    updatedUser.status === "completed" ||
    updatedUser.status === "cancelled"
  )
    await User.findByIdAndDelete(userId);

  return updatedUser;
};

const deleteOne = async (userId) => {
  const deletedUser = User.findByIdAndDelete(userId);
  return deletedUser;
};

const userDAO = {
  findAll,
  findOne,
  insertOne,
  updateOneOrMany,
  deleteOne,
};

export default userDAO;
