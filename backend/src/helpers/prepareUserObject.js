import { filterObjectByFields } from "../utils/filterObjectByFields.js";

export const prepareUserObject = (newUser, fields = []) => {
  const baseObj = {
    _id: newUser._id,
    username: newUser.username,
    email: newUser.email,
    password: newUser.password,
  };

  return filterObjectByFields(baseObj, fields);
};
