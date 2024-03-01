import { filterObjectByFields } from "../utils/filterObjectByFields.js";

export const prepareEmployeeObject = (newEmployee, fields = []) => {
  const baseObj = {
    _id: newEmployee._id,
    firstname: newEmployee.firstname,
    lastname: newEmployee.lastname,
    gender: newEmployee.gender,
    role: newEmployee.role,
    contactInformation: {
      phone: newEmployee.contactInformation.phone,
      email: newEmployee.contactInformation.email,
      fax: newEmployee.contactInformation.fax,
    },
    workingHours: {
      monday: newEmployee.workingHours.monday,
      tuesday: newEmployee.workingHours.tuesday,
      wednesday: newEmployee.workingHours.wednesday,
      thursday: newEmployee.workingHours.thursday,
      friday: newEmployee.workingHours.friday,
      saturday: newEmployee.workingHours.saturday,
      sunday: newEmployee.workingHours.sunday,
    },
  };

  return filterObjectByFields(baseObj, fields);
};
