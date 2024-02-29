import { AppointmentService } from "../services/index.js";
import {
  OK,
  CREATED,
  NO_CONTENT,
  BAD_REQUEST,
  INTERNAL_SERVER_ERROR,
} from "../data-access/httpStatusCodes.js";

export const getAllAppointmentsCtrl = async (req, res) => {
  try {
    const allAppointments = await AppointmentService.getAllAppointments();

    res.status(OK).json({
      status: "success",
      data: {
        appointments: allAppointments,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(INTERNAL_SERVER_ERROR).json({
      status: "fail",
      error,
      message: error.message || "Could not retrive appointments",
    });
  }
};

export const postCreateAppointmentCtrl = async (req, res) => {
  try {
    const newAppointment = await AppointmentService.postAddAppointment(
      req.body
    );
    res.status(OK).json({
      status: "success",
      data: {
        appointment: newAppointment,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(INTERNAL_SERVER_ERROR).json({
      status: "fail",
      error,
      message: error.message || "Could not create appointment",
    });
  }
};

export const getOneAppointmentCtrl = async (req, res) => {
  try {
    const appointmentId = req.params.id;
    const newAppointment = await AppointmentService.getOneAppointment(
      appointmentId
    );
    res.status(OK).json({
      status: "success",
      data: {
        appointment: newAppointment,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(INTERNAL_SERVER_ERROR).json({
      status: "fail",
      error,
      message: error.message || "Could not create appointment",
    });
  }
};

export const patchAppointmentCtrl = async (req, res) => {
  try {
    const appointmentId = req.params.id;
    const updatedAppointment = await AppointmentService.patchAppointment(
      appointmentId,
      req.body
    );
    res.status(OK).json({
      status: "success",
      data: {
        appointment: updatedAppointment,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(INTERNAL_SERVER_ERROR).json({
      status: "fail",
      error,
      message: error.message || "Could not create appointment",
    });
  }
};

export const deleteAppointmentCtrl = async (req, res) => {
  try {
    const appointmentId = req.params.id;
    const newAppointment = await AppointmentService.deleteAppointment(
      appointmentId
    );
    res.status(OK).json({
      status: "success",
      data: {
        appointment: newAppointment,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(INTERNAL_SERVER_ERROR).json({
      status: "fail",
      error,
      message: error.message || "Could not create appointment",
    });
  }
};

const AppointmentController = {
  getAllAppointmentsCtrl,
  postCreateAppointmentCtrl,
  getOneAppointmentCtrl,
  patchAppointmentCtrl,
  deleteAppointmentCtrl,
};

export default AppointmentController;
