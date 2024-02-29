import {
  OK,
  CREATED,
  NO_CONTENT,
  BAD_REQUEST,
  INTERNAL_SERVER_ERROR,
} from "../data-access/httpStatusCodes.js";

export const getAllUsersCtrl = (req, res) => {};

export const postCreateUserCtrl = (req, res) => {};

export const getOneUserCtrl = (req, res) => {};

export const patchUserCtrl = (req, res) => {};

export const deleteUserCtrl = (req, res) => {};

const UserController = {
  getAllUsersCtrl,
  postCreateUserCtrl,
  getOneUserCtrl,
  patchUserCtrl,
  deleteUserCtrl,
};

export default UserController;
