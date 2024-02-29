import { EmployeeDAO } from "../../data-access/index.js";

export const getAllEmployees = async () => {
  const allEmployees = await EmployeeDAO.findAll();
  return allEmployees;
};
