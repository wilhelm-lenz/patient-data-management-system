import {
  OK,
  CREATED,
  NO_CONTENT,
  BAD_REQUEST,
  INTERNAL_SERVER_ERROR,
} from "../data-access/httpStatusCodes.js";

export const getAllTreatmentsCtrl = (req, res) => {};

export const postCreateTreatmentCtrl = (req, res) => {};

export const getOneTreatmentCtrl = (req, res) => {};

export const patchTreatmentCtrl = (req, res) => {};

export const deleteTreatmentCtrl = (req, res) => {};

const TreatmentController = {
  getAllTreatmentsCtrl,
  postCreateTreatmentCtrl,
  getOneTreatmentCtrl,
  patchTreatmentCtrl,
  deleteTreatmentCtrl,
};

export default TreatmentController;
