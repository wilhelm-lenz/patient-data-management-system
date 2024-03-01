import { DoctorDAO } from "../../data-access/index.js";
import { prepareDoctorObject } from "../../helpers/prepareDoctorObject.js";

export const postAddDoctor = async (newDoctorInfo) => {
  const fields = [
    "title",
    "firstname",
    "lastname",
    "gender",
    "specialization",
    "contactInformation",
    "workingHours",
  ];

  const doctorForUpdateData = prepareDoctorObject(newDoctorInfo, fields);

  const newDoctor = await DoctorDAO.insertOne(doctorForUpdateData);

  return newDoctor;
};
