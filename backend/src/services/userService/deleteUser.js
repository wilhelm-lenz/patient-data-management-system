import { UserDAO } from "../../data-access/index.js";

export const deleteUser = async (userId) => {
  const deletedUser = await UserDAO.deleteOne(userId);
  return deletedUser;
};
