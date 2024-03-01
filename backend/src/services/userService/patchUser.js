import { UserDAO } from "../../data-access/index.js";
import { prepareUserObject } from "../../helpers/prepareUserObject.js";

export const patchUser = async (userId, updateUserInfo) => {
  const fields = ["username", "email", "password", "status"];

  const appointmentForUpdateData = prepareUserObject(updateUserInfo, fields);

  const updatedUser = await UserDAO.updateOneOrMany(
    userId,
    appointmentForUpdateData
  );
  return updatedUser;
};
