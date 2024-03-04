import { OK, CREATED, NO_CONTENT } from "../data-access/httpStatusCodes.js";
import { UserService } from "../services/index.js";
import { catchAsync } from "../utils/catchAsync.js";

export const getAllUsersCtrl = catchAsync(async (_, res) => {
  const allUsers = await UserService.getAllUsers();

  res.status(OK).json({
    status: "success",
    data: {
      Users: allUsers,
    },
  });
});

export const postCreateUserCtrl = catchAsync(async (req, res) => {
  const newUser = await UserService.postAddUser(req.body);
  res.status(CREATED).json({
    status: "success",
    data: {
      User: newUser,
    },
  });
});

export const getOneUserCtrl = catchAsync(async (req, res) => {
  const UserId = req.params.id;
  const newUser = await UserService.getOneUser(UserId);
  res.status(OK).json({
    status: "success",
    data: {
      User: newUser,
    },
  });
});

export const patchUserCtrl = catchAsync(async (req, res) => {
  const UserId = req.params.id;
  const newUser = await UserService.patchUser(UserId, req.body);
  res.status(OK).json({
    status: "success",
    data: {
      User: newUser,
    },
  });
});

export const deleteUserCtrl = catchAsync(async (req, res) => {
  const UserId = req.params.id;
  const newUser = await UserService.deleteUser(UserId);
  res.status(NO_CONTENT).json({
    status: "success",
    data: {
      User: newUser,
    },
  });
});

const UserController = {
  getAllUsersCtrl,
  postCreateUserCtrl,
  getOneUserCtrl,
  patchUserCtrl,
  deleteUserCtrl,
};

export default UserController;
