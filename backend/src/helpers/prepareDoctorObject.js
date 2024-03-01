import { filterObjectByFields } from "../utils/filterObjectByFields.js";

export const prepareDoctorObject = (newDoctor, fields = []) => {
  const baseObj = {
    _id: newDoctor._id,
    title: newDoctor.title,
    firstname: newDoctor.firstname,
    lastname: newDoctor.lastname,
    gender: newDoctor.gender,
    specialization: newDoctor.specialization,
    contactInformation: {
      phone: newDoctor.contactInformation.phone,
      email: newDoctor.contactInformation.email,
      fax: newDoctor.contactInformation.fax,
    },
    workingHours: {
      monday: newDoctor.workingHours.monday,
      tuesday: newDoctor.workingHours.tuesday,
      wednesday: newDoctor.workingHours.wednesday,
      thursday: newDoctor.workingHours.thursday,
      friday: newDoctor.workingHours.friday,
      saturday: newDoctor.workingHours.saturday,
      sunday: newDoctor.workingHours.sunday,
    },
  };

  return filterObjectByFields(baseObj, fields);
};
