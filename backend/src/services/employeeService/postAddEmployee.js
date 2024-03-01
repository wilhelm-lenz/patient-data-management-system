import { EmployeeDAO } from "../../data-access/index.js";
import { prepareEmployeeObject } from "../../helpers/prepareEmployeeObject.js";

export const postAddEmployee = async (newEmployeeInfo) => {
  const fields = [
    "firstname",
    "lastname",
    "gender",
    "role",
    "contactInformation",
    "workingHours",
  ];

  const employeeForUpdateData = prepareEmployeeObject(newEmployeeInfo, fields);

  const newEmployee = await EmployeeDAO.insertOne(employeeForUpdateData);
  return newEmployee;
};
