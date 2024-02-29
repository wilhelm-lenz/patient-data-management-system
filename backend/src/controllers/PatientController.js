import {
  OK,
  CREATED,
  NO_CONTENT,
  BAD_REQUEST,
  INTERNAL_SERVER_ERROR,
} from "../data-access/httpStatusCodes.js";

export const getAllPatientsCtrl = (req, res) => {};

export const postCreatePatientCtrl = (req, res) => {};

export const getOnePatientCtrl = (req, res) => {};

export const patchPatientCtrl = (req, res) => {};

export const deletePatientCtrl = (req, res) => {};

const PatientController = {
  getAllPatientsCtrl,
  postCreatePatientCtrl,
  getOnePatientCtrl,
  patchPatientCtrl,
  deletePatientCtrl,
};

export default PatientController;
