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

  if (!foundedOneUser)
    throw new AppError("No Treatment found with that ID", NOT_FOUND);

  return foundedOneUser;
};

// const insertOne = async (newUser) => {
//   const insertUser = await User.create(newUser);
//   return insertUser;
// };

const updateOneOrMany = async (userId, userForUpdateData) => {
  const updatedUser = await User.findByIdAndUpdate(
    mongoose.Types.ObjectId.createFromHexString(userId),
    userForUpdateData,
    { new: true }
  );
  if (!updatedUser)
    throw new AppError("No User found with that ID", BAD_REQUEST);
  else if (
    updatedUser.status === "completed" ||
    updatedUser.status === "cancelled"
  )
    await User.findByIdAndDelete(userId);

  return updatedUser;
};

const deleteOne = async (userId) => {
  const deletedUser = User.findByIdAndDelete(userId);

  if (!deletedUser) throw new AppError("No User found with that ID", NOT_FOUND);

  return deletedUser;
};

const userDAO = {
  findAll,
  findOne,
  // insertOne,
  updateOneOrMany,
  deleteOne,
};

export default userDAO;
