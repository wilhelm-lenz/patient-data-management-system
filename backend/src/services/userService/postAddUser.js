import { UserDAO } from "../../data-access/index.js";
import { prepareUserObject } from "../../helpers/prepareUserObject.js";

export const postAddUser = async (newUserInfo) => {
  const fields = ["username", "email", "password", "status"];

  const userForUpdateData = prepareUserObject(newUserInfo, fields);

  const newUser = await UserDAO.insertOne(userForUpdateData);
  return newUser;
};
