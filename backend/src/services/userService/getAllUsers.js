import { UserDAO } from "../../data-access/index.js";

export const getAllUsers = async () => {
  const allUsers = await UserDAO.findAll();
  return allUsers;
};
