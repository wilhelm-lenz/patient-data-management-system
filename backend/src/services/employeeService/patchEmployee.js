import { EmployeeDAO } from "../../data-access/index.js";

export const patchEmployee = async (employeeId, updateEmployee) => {
  const updatedEmployee = await EmployeeDAO.updateOne(
    employeeId,
    updateEmployee
  );
  return updatedEmployee;
};
