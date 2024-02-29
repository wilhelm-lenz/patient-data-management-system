import {
  OK,
  CREATED,
  NO_CONTENT,
  BAD_REQUEST,
  INTERNAL_SERVER_ERROR,
} from "../data-access/httpStatusCodes.js";

export const getAllMedicalDocumentsCtrl = (req, res) => {};

export const postCreateMedicalDocumentCtrl = (req, res) => {};

export const getOneMedicalDocumentCtrl = (req, res) => {};

export const patchMedicalDocumentCtrl = (req, res) => {};

export const deleteMedicalDocumentCtrl = (req, res) => {};

const MedicalDocumentController = {
  getAllMedicalDocumentsCtrl,
  postCreateMedicalDocumentCtrl,
  getOneMedicalDocumentCtrl,
  patchMedicalDocumentCtrl,
  deleteMedicalDocumentCtrl,
};

export default MedicalDocumentController;
