import { EmployeeDAO } from "../../data-access/index.js";

export const deleteEmployee = async (employeeId) => {
  const deletedEmployee = await EmployeeDAO.deleteOne(employeeId);
  return deletedEmployee;
};
