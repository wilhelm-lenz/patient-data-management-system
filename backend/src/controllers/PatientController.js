import { OK, CREATED, NO_CONTENT } from "../data-access/httpStatusCodes.js";
import { PatientService } from "../services/index.js";
import { catchAsync } from "../utils/catchAsync.js";

export const getAllPatientsCtrl = catchAsync(async (_, res) => {
  const allPatients = await PatientService.getAllPatients();

  res.status(OK).json({
    status: "success",
    data: {
      Patients: allPatients,
    },
  });
});

export const postCreatePatientCtrl = catchAsync(async (req, res) => {
  const newPatient = await PatientService.postAddPatient(req.body);
  res.status(CREATED).json({
    status: "success",
    data: {
      Patient: newPatient,
    },
  });
});

export const getOnePatientCtrl = catchAsync(async (req, res) => {
  const patientId = req.params.id;
  const newPatient = await PatientService.getOnePatient(patientId);
  res.status(OK).json({
    status: "success",
    data: {
      Patient: newPatient,
    },
  });
});

export const patchPatientCtrl = catchAsync(async (req, res) => {
  const patientId = req.params.id;
  const newPatient = await PatientService.patchPatient(patientId, req.body);
  res.status(OK).json({
    status: "success",
    data: {
      Patient: newPatient,
    },
  });
});

export const deletePatientCtrl = catchAsync(async (req, res) => {
  const patientId = req.params.id;
  const newPatient = await PatientService.deletePatient(patientId);
  res.status(NO_CONTENT).json({
    status: "success",
    data: {
      Patient: newPatient,
    },
  });
});

const PatientController = {
  getAllPatientsCtrl,
  postCreatePatientCtrl,
  getOnePatientCtrl,
  patchPatientCtrl,
  deletePatientCtrl,
};

export default PatientController;
