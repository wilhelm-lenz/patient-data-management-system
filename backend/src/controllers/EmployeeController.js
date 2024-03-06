import { OK, CREATED, NO_CONTENT } from "../data-access/httpStatusCodes.js";
import { EmployeeService } from "../services/index.js";
import { catchAsync } from "../utils/catchAsync.js";

export const getAllEmployeesCtrl = catchAsync(async (_, res) => {
  const allEmployees = await EmployeeService.getAllEmployees();

  res.status(OK).json({
    status: "success",
    data: {
      employees: allEmployees,
    },
  });
});

export const postCreateEmployeeCtrl = catchAsync(async (req, res) => {
  const newEmployee = await EmployeeService.postAddEmployee(req.body);
  res.status(CREATED).json({
    status: "success",
    data: {
      employee: newEmployee,
    },
  });
});

export const getOneEmployeeCtrl = catchAsync(async (req, res) => {
  const employeeId = req.params.id;
  const newEmployee = await EmployeeService.getOneEmployee(employeeId);
  res.status(OK).json({
    status: "success",
    data: {
      employee: newEmployee,
    },
  });
});

export const patchEmployeeCtrl = catchAsync(async (req, res) => {
  const employeeId = req.params.id;
  const newEmployee = await EmployeeService.patchEmployee(employeeId, req.body);
  res.status(OK).json({
    status: "success",
    data: {
      employee: newEmployee,
    },
  });
});

export const deleteEmployeeCtrl = catchAsync(async (req, res) => {
  const employeeId = req.params.id;
  const newEmployee = await EmployeeService.deleteEmployee(employeeId);
  res.status(NO_CONTENT).json({
    status: "success",
    data: {
      employee: newEmployee,
    },
  });
});

const EmployeeController = {
  getAllEmployeesCtrl,
  postCreateEmployeeCtrl,
  getOneEmployeeCtrl,
  patchEmployeeCtrl,
  deleteEmployeeCtrl,
};

export default EmployeeController;
