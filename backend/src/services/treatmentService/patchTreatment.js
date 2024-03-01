import { TreatmentDAO } from "../../data-access/index.js";
import { prepareTreatmentObject } from "../../helpers/prepareTreatmentObject.js";

export const patchTreatment = async (treatmentId, updateTreatmentInfo) => {
  const fields = [
    "patientId",
    "doctorId",
    "date",
    "time",
    "diagnosis",
    "treatmentCourse",
  ];

  const treatmentForUpdateData = await prepareTreatmentObject(
    updateTreatmentInfo,
    fields
  );

  const updatedTreatment = await TreatmentDAO.updateOneOrMany(
    treatmentId,
    treatmentForUpdateData
  );
  return updatedTreatment;
};
