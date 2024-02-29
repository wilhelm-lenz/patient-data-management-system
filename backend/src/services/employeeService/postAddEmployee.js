import { EmployeeDAO } from "../../data-access/index.js";

export const postAddEmployee = async () => {
  const newEmployee = await EmployeeDAO.insertOne();
  return newEmployee;
};
