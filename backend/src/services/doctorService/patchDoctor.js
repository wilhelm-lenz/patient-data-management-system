import { DoctorDAO } from "../../data-access/index.js";
import { prepareDoctorObject } from "../../helpers/prepareDoctorObject.js";

export const patchDoctor = async (doctorId, updateDoctorInfo) => {
  const fields = [
    "title",
    "firstname",
    "lastname",
    "gender",
    "specialization",
    "contactInformation",
    "workingHours",
  ];

  const doctorForUpdateData = prepareDoctorObject(updateDoctorInfo, fields);

  const updatedDoctor = await DoctorDAO.updateOneOrMany(
    doctorId,
    doctorForUpdateData
  );
  return updatedDoctor;
};
