import {
  OK,
  CREATED,
  NO_CONTENT,
  BAD_REQUEST,
  INTERNAL_SERVER_ERROR,
} from "../data-access/httpStatusCodes.js";

export const getAllMedicationsCtrl = (req, res) => {};

export const postCreateMedicationCtrl = (req, res) => {};

export const getOneMedicationCtrl = (req, res) => {};

export const patchMedicationCtrl = (req, res) => {};

export const deleteMedicationCtrl = (req, res) => {};

const MedicationController = {
  getAllMedicationsCtrl,
  postCreateMedicationCtrl,
  getOneMedicationCtrl,
  patchMedicationCtrl,
  deleteMedicationCtrl,
};

export default MedicationController;
