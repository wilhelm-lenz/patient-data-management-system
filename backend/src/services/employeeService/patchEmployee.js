import { EmployeeDAO } from "../../data-access/index.js";
import { prepareEmployeeObject } from "../../helpers/prepareEmployeeObject.js";

export const patchEmployee = async (employeeId, updateEmployeeInfo) => {
  const fields = [
    "firstname",
    "lastname",
    "gender",
    "role",
    "contactInformation",
    "workingHours",
  ];

  const employeeForUpdateData = prepareEmployeeObject(
    updateEmployeeInfo,
    fields
  );

  const updatedEmployee = await EmployeeDAO.updateOneOrMany(
    employeeId,
    employeeForUpdateData
  );
  return updatedEmployee;
};
