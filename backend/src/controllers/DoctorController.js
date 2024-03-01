import {
  OK,
  CREATED,
  NO_CONTENT,
  BAD_REQUEST,
  INTERNAL_SERVER_ERROR,
} from "../data-access/httpStatusCodes.js";
import { DoctorService } from "../services/index.js";

export const getAllDoctorsCtrl = async (req, res) => {
  try {
    const allDoctors = await DoctorService.getAllDoctors();

    res.status(OK).json({
      status: "success",
      data: {
        Doctors: allDoctors,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(INTERNAL_SERVER_ERROR).json({
      status: "fail",
      error,
      message: error.message || "Could not retrive Doctors",
    });
  }
};

export const postCreateDoctorCtrl = async (req, res) => {
  try {
    const newDoctor = await DoctorService.postAddDoctor(req.body);
    res.status(OK).json({
      status: "success",
      data: {
        Doctor: newDoctor,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(INTERNAL_SERVER_ERROR).json({
      status: "fail",
      error,
      message: error.message || "Could not create Doctor",
    });
  }
};

export const getOneDoctorCtrl = async (req, res) => {
  try {
    const doctorId = req.params.id;
    const newDoctor = await DoctorService.getOneDoctor(doctorId);
    res.status(OK).json({
      status: "success",
      data: {
        Doctor: newDoctor,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(INTERNAL_SERVER_ERROR).json({
      status: "fail",
      error,
      message: error.message || "Could not create Doctor",
    });
  }
};

export const patchDoctorCtrl = async (req, res) => {
  try {
    const doctorId = req.params.id;
    const newDoctor = await DoctorService.patchDoctor(doctorId, req.body);
    res.status(OK).json({
      status: "success",
      data: {
        Doctor: newDoctor,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(INTERNAL_SERVER_ERROR).json({
      status: "fail",
      error,
      message: error.message || "Could not create Doctor",
    });
  }
};

export const deleteDoctorCtrl = async (req, res) => {
  try {
    const doctorId = req.params.id;
    const newDoctor = await DoctorService.deleteDoctor(doctorId);
    res.status(OK).json({
      status: "success",
      data: {
        Doctor: newDoctor,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(INTERNAL_SERVER_ERROR).json({
      status: "fail",
      error,
      message: error.message || "Could not create Doctor",
    });
  }
};

const DoctorController = {
  getAllDoctorsCtrl,
  postCreateDoctorCtrl,
  getOneDoctorCtrl,
  patchDoctorCtrl,
  deleteDoctorCtrl,
};

export default DoctorController;
