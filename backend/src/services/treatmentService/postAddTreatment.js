import { TreatmentDAO } from "../../data-access/index.js";
import { prepareTreatmentObject } from "../../helpers/prepareTreatmentObject.js";

export const postAddTreatment = async (newTreatmentInfo) => {
  const fields = [
    "patientId",
    "doctorId",
    "date",
    "time",
    "diagnosis",
    "treatmentCourse",
  ];

  const treatmentForUpdateData = await prepareTreatmentObject(
    newTreatmentInfo,
    fields
  );

  const newTreatment = await TreatmentDAO.insertOne(treatmentForUpdateData);
  return newTreatment;
};
