import { AppointmentService } from "../services/index.js";
import { OK, CREATED, NO_CONTENT } from "../data-access/httpStatusCodes.js";
import { catchAsync } from "../utils/catchAsync.js";

export const getAllAppointmentsCtrl = catchAsync(async (_, res) => {
  const allAppointments = await AppointmentService.getAllAppointments();

  res.status(OK).json({
    status: "success",
    data: {
      appointments: allAppointments,
    },
  });
});

export const postCreateAppointmentCtrl = catchAsync(async (req, res) => {
  const newAppointment = await AppointmentService.postAddAppointment(req.body);
  res.status(CREATED).json({
    status: "success",
    data: {
      appointment: newAppointment,
    },
  });
});

export const getOneAppointmentCtrl = catchAsync(async (req, res) => {
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
});

export const patchAppointmentCtrl = catchAsync(async (req, res) => {
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
});

export const deleteAppointmentCtrl = catchAsync(async (req, res) => {
  const appointmentId = req.params.id;
  const newAppointment = await AppointmentService.deleteAppointment(
    appointmentId
  );
  res.status(NO_CONTENT).json({
    status: "success",
    data: {
      appointment: newAppointment,
    },
  });
});

const AppointmentController = {
  getAllAppointmentsCtrl,
  postCreateAppointmentCtrl,
  getOneAppointmentCtrl,
  patchAppointmentCtrl,
  deleteAppointmentCtrl,
};

export default AppointmentController;
