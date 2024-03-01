import {
  OK,
  CREATED,
  NO_CONTENT,
  BAD_REQUEST,
  INTERNAL_SERVER_ERROR,
} from "../data-access/httpStatusCodes.js";
import { UserService } from "../services/index.js";

export const getAllUsersCtrl = async (req, res) => {
  try {
    const allUsers = await UserService.getAllUsers();

    res.status(OK).json({
      status: "success",
      data: {
        Users: allUsers,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(INTERNAL_SERVER_ERROR).json({
      status: "fail",
      error,
      message: error.message || "Could not retrive Users",
    });
  }
};

export const postCreateUserCtrl = async (req, res) => {
  try {
    const newUser = await UserService.postAddUser(req.body);
    res.status(OK).json({
      status: "success",
      data: {
        User: newUser,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(INTERNAL_SERVER_ERROR).json({
      status: "fail",
      error,
      message: error.message || "Could not create User",
    });
  }
};

export const getOneUserCtrl = async (req, res) => {
  try {
    const UserId = req.params.id;
    const newUser = await UserService.getOneUser(UserId);
    res.status(OK).json({
      status: "success",
      data: {
        User: newUser,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(INTERNAL_SERVER_ERROR).json({
      status: "fail",
      error,
      message: error.message || "Could not create User",
    });
  }
};

export const patchUserCtrl = async (req, res) => {
  try {
    const UserId = req.params.id;
    const newUser = await UserService.patchUser(UserId, req.body);
    res.status(OK).json({
      status: "success",
      data: {
        User: newUser,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(INTERNAL_SERVER_ERROR).json({
      status: "fail",
      error,
      message: error.message || "Could not create User",
    });
  }
};

export const deleteUserCtrl = async (req, res) => {
  try {
    const UserId = req.params.id;
    const newUser = await UserService.deleteUser(UserId);
    res.status(OK).json({
      status: "success",
      data: {
        User: newUser,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(INTERNAL_SERVER_ERROR).json({
      status: "fail",
      error,
      message: error.message || "Could not create User",
    });
  }
};

const UserController = {
  getAllUsersCtrl,
  postCreateUserCtrl,
  getOneUserCtrl,
  patchUserCtrl,
  deleteUserCtrl,
};

export default UserController;
