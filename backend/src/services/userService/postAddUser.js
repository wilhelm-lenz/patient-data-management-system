// import { UserDAO } from "../../data-access/index.js";
// import { prepareUserObject } from "../../helpers/prepareUserObject.js";

// export const postAddUser = async (newUserInfo) => {
//   const fields = [
//     "username",
//     "email",
//     "password",
//     "status",
//     "passwordChangeAt",
//     "role",
//   ];

//   const userForUpdateData = prepareUserObject(newUserInfo, fields);
//   console.log(userForUpdateData);
//   const newUser = await UserDAO.insertOne(userForUpdateData);
//   return newUser;
// };
