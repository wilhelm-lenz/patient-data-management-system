import { UserDAO } from "../../data-access/index.js";

export const postAddUser = async () => {
  const newUser = await UserDAO.insertOne();
  return newUser;
};
