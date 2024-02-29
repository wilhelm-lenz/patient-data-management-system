import { EmployeeDAO } from "../../data-access/index.js";

export const getOneEmployee = async (employeeId) => {
  const oneEmployee = await EmployeeDAO.findOne(employeeId);
  return oneEmployee;
};
