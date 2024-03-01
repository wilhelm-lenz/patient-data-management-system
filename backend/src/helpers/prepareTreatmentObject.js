import { filterObjectByFields } from "../utils/filterObjectByFields.js";
import Doctor from "../models/Doctor.js";
import Patient from "../models/Patient.js";

export const prepareTreatmentObject = async (newTreatment, fields = []) => {
  const patient = await Patient.findById(newTreatment.patientId);
  const doctor = await Doctor.findById(newTreatment.doctorId);

  if (!patient || !doctor) {
    throw new Error("patient or doctor not found");
  }
  const baseObj = {
    _id: newTreatment._id,
    patientId: patient._id,
    doctorId: doctor._id,
    date: newTreatment.date,
    time: newTreatment.time,
    diagnosis: newTreatment.diagnosis,
    treatmentCourse: newTreatment.treatmentCourse,
  };

  return filterObjectByFields(baseObj, fields);
};
