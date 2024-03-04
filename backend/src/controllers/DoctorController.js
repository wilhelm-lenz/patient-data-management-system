import { OK, CREATED, NO_CONTENT } from "../data-access/httpStatusCodes.js";
import { DoctorService } from "../services/index.js";
import { catchAsync } from "../utils/catchAsync.js";

export const getAllDoctorsCtrl = catchAsync(async (_, res) => {
  const allDoctors = await DoctorService.getAllDoctors();

  res.status(OK).json({
    status: "success",
    data: {
      Doctors: allDoctors,
    },
  });
});

export const postCreateDoctorCtrl = catchAsync(async (req, res) => {
  const newDoctor = await DoctorService.postAddDoctor(req.body);
  res.status(CREATED).json({
    status: "success",
    data: {
      Doctor: newDoctor,
    },
  });
});

export const getOneDoctorCtrl = catchAsync(async (req, res) => {
  const doctorId = req.params.id;
  const newDoctor = await DoctorService.getOneDoctor(doctorId);
  res.status(OK).json({
    status: "success",
    data: {
      Doctor: newDoctor,
    },
  });
});

export const patchDoctorCtrl = catchAsync(async (req, res) => {
  const doctorId = req.params.id;
  const newDoctor = await DoctorService.patchDoctor(doctorId, req.body);
  res.status(OK).json({
    status: "success",
    data: {
      Doctor: newDoctor,
    },
  });
});

export const deleteDoctorCtrl = catchAsync(async (req, res) => {
  const doctorId = req.params.id;
  const newDoctor = await DoctorService.deleteDoctor(doctorId);
  res.status(NO_CONTENT).json({
    status: "success",
    data: {
      Doctor: newDoctor,
    },
  });
});

const DoctorController = {
  getAllDoctorsCtrl,
  postCreateDoctorCtrl,
  getOneDoctorCtrl,
  patchDoctorCtrl,
  deleteDoctorCtrl,
};

export default DoctorController;
