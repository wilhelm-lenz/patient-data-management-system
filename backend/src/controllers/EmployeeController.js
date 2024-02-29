import {
  OK,
  CREATED,
  NO_CONTENT,
  BAD_REQUEST,
  INTERNAL_SERVER_ERROR,
} from "../data-access/httpStatusCodes.js";

export const getAllEmployeesCtrl = (req, res) => {};

export const postCreateEmployeeCtrl = (req, res) => {};

export const getOneEmployeeCtrl = (req, res) => {};

export const patchEmployeeCtrl = (req, res) => {};

export const deleteEmployeeCtrl = (req, res) => {};

const EmployeeController = {
  getAllEmployeesCtrl,
  postCreateEmployeeCtrl,
  getOneEmployeeCtrl,
  patchEmployeeCtrl,
  deleteEmployeeCtrl,
};

export default EmployeeController;
