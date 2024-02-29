import {
  OK,
  CREATED,
  NO_CONTENT,
  BAD_REQUEST,
  INTERNAL_SERVER_ERROR,
} from "../data-access/httpStatusCodes.js";

export const getAllPrescriptionsCtrl = (req, res) => {};

export const postCreatePrescriptionCtrl = (req, res) => {};

export const getOnePrescriptionCtrl = (req, res) => {};

export const patchPrescriptionCtrl = (req, res) => {};

export const deletePrescriptionCtrl = (req, res) => {};

const PrescriptionController = {
  getAllPrescriptionsCtrl,
  postCreatePrescriptionCtrl,
  getOnePrescriptionCtrl,
  patchPrescriptionCtrl,
  deletePrescriptionCtrl,
};

export default PrescriptionController;
