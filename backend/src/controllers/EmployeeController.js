import {
  OK,
  CREATED,
  NO_CONTENT,
  BAD_REQUEST,
  INTERNAL_SERVER_ERROR,
} from "../data-access/httpStatusCodes.js";
import { EmployeeService } from "../services/index.js";

export const getAllEmployeesCtrl = async (req, res) => {
  try {
    const allEmployees = await EmployeeService.getAllEmployees();

    res.status(OK).json({
      status: "success",
      data: {
        Employees: allEmployees,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(INTERNAL_SERVER_ERROR).json({
      status: "fail",
      error,
      message: error.message || "Could not retrive Employees",
    });
  }
};

export const postCreateEmployeeCtrl = async (req, res) => {
  try {
    const newEmployee = await EmployeeService.postAddEmployee(req.body);
    res.status(OK).json({
      status: "success",
      data: {
        Employee: newEmployee,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(INTERNAL_SERVER_ERROR).json({
      status: "fail",
      error,
      message: error.message || "Could not create Employee",
    });
  }
};

export const getOneEmployeeCtrl = async (req, res) => {
  try {
    const employeeId = req.params.id;
    const newEmployee = await EmployeeService.getOneEmployee(employeeId);
    res.status(OK).json({
      status: "success",
      data: {
        Employee: newEmployee,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(INTERNAL_SERVER_ERROR).json({
      status: "fail",
      error,
      message: error.message || "Could not create Employee",
    });
  }
};

export const patchEmployeeCtrl = async (req, res) => {
  try {
    const employeeId = req.params.id;
    const newEmployee = await EmployeeService.getOneEmployee(employeeId);
    res.status(OK).json({
      status: "success",
      data: {
        Employee: newEmployee,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(INTERNAL_SERVER_ERROR).json({
      status: "fail",
      error,
      message: error.message || "Could not create Employee",
    });
  }
};

export const deleteEmployeeCtrl = async (req, res) => {
  try {
    const employeeId = req.params.id;
    const newEmployee = await EmployeeService.getOneEmployee(employeeId);
    res.status(OK).json({
      status: "success",
      data: {
        Employee: newEmployee,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(INTERNAL_SERVER_ERROR).json({
      status: "fail",
      error,
      message: error.message || "Could not create Employee",
    });
  }
};

const EmployeeController = {
  getAllEmployeesCtrl,
  postCreateEmployeeCtrl,
  getOneEmployeeCtrl,
  patchEmployeeCtrl,
  deleteEmployeeCtrl,
};

export default EmployeeController;
