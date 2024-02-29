import {
  OK,
  CREATED,
  NO_CONTENT,
  BAD_REQUEST,
  INTERNAL_SERVER_ERROR,
} from "../data-access/httpStatusCodes.js";

export const getAllDoctorsCtrl = (req, res) => {};

export const postCreateDoctorCtrl = (req, res) => {};

export const getOneDoctorCtrl = (req, res) => {};

export const patchDoctorCtrl = (req, res) => {};

export const deleteDoctorCtrl = (req, res) => {};

const DoctorController = {
  getAllDoctorsCtrl,
  postCreateDoctorCtrl,
  getOneDoctorCtrl,
  patchDoctorCtrl,
  deleteDoctorCtrl,
};

export default DoctorController;
