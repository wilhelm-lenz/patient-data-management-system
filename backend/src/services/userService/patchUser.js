import { UserDAO } from "../../data-access/index.js";

export const patchUser = async (userId, updateUser) => {
  const updatedUser = await UserDAO.updateOne(userId, updateUser);
  return updatedUser;
};
