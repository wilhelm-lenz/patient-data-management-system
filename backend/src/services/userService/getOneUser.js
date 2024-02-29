import { UserDAO } from "../../data-access/index.js";

export const getOneUser = async (userId) => {
  const oneUser = await UserDAO.findOne(userId);
  return oneUser;
};
