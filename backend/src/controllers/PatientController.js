import {
  OK,
  CREATED,
  NO_CONTENT,
  BAD_REQUEST,
  INTERNAL_SERVER_ERROR,
} from "../data-access/httpStatusCodes.js";
import { PatientService } from "../services/index.js";

export const getAllPatientsCtrl = async (req, res) => {
  try {
    const allPatients = await PatientService.getAllPatients();

    res.status(OK).json({
      status: "success",
      data: {
        Patients: allPatients,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(INTERNAL_SERVER_ERROR).json({
      status: "fail",
      error,
      message: error.message || "Could not retrive Patients",
    });
  }
};

export const postCreatePatientCtrl = async (req, res) => {
  try {
    const newPatient = await PatientService.postAddPatient(req.body);
    res.status(OK).json({
      status: "success",
      data: {
        Patient: newPatient,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(INTERNAL_SERVER_ERROR).json({
      status: "fail",
      error,
      message: error.message || "Could not create Patient",
    });
  }
};

export const getOnePatientCtrl = async (req, res) => {
  try {
    const patientId = req.params.id;
    const newPatient = await PatientService.getOnePatient(patientId);
    res.status(OK).json({
      status: "success",
      data: {
        Patient: newPatient,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(INTERNAL_SERVER_ERROR).json({
      status: "fail",
      error,
      message: error.message || "Could not create Patient",
    });
  }
};

export const patchPatientCtrl = async (req, res) => {
  try {
    const patientId = req.params.id;
    const newPatient = await PatientService.patchPatient(patientId, req.body);
    res.status(OK).json({
      status: "success",
      data: {
        Patient: newPatient,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(INTERNAL_SERVER_ERROR).json({
      status: "fail",
      error,
      message: error.message || "Could not create Patient",
    });
  }
};

export const deletePatientCtrl = async (req, res) => {
  try {
    const patientId = req.params.id;
    const newPatient = await PatientService.deletePatient(patientId);
    res.status(OK).json({
      status: "success",
      data: {
        Patient: newPatient,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(INTERNAL_SERVER_ERROR).json({
      status: "fail",
      error,
      message: error.message || "Could not create Patient",
    });
  }
};

const PatientController = {
  getAllPatientsCtrl,
  postCreatePatientCtrl,
  getOnePatientCtrl,
  patchPatientCtrl,
  deletePatientCtrl,
};

export default PatientController;
