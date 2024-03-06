import { OK, CREATED, NO_CONTENT } from "../data-access/httpStatusCodes.js";
import { TreatmentService } from "../services/index.js";
import { catchAsync } from "../utils/catchAsync.js";

export const getAllTreatmentsCtrl = catchAsync(async (_, res) => {
  const allTreatments = await TreatmentService.getAllTreatments();

  res.status(OK).json({
    status: "success",
    data: {
      treatments: allTreatments,
    },
  });
});

export const postCreateTreatmentCtrl = catchAsync(async (req, res) => {
  const newTreatment = await TreatmentService.postAddTreatment(req.body);
  res.status(CREATED).json({
    status: "success",
    data: {
      treatment: newTreatment,
    },
  });
});

export const getOneTreatmentCtrl = catchAsync(async (req, res) => {
  const treatmentId = req.params.id;
  const newTreatment = await TreatmentService.getOneTreatment(treatmentId);
  res.status(OK).json({
    status: "success",
    data: {
      treatment: newTreatment,
    },
  });
});

export const patchTreatmentCtrl = catchAsync(async (req, res) => {
  const treatmentId = req.params.id;
  const newTreatment = await TreatmentService.patchTreatment(
    treatmentId,
    req.body
  );
  res.status(OK).json({
    status: "success",
    data: {
      treatment: newTreatment,
    },
  });
});

export const deleteTreatmentCtrl = catchAsync(async (req, res) => {
  const treatmentId = req.params.id;
  const newTreatment = await TreatmentService.deleteTreatment(treatmentId);
  res.status(NO_CONTENT).json({
    status: "success",
    data: {
      treatment: newTreatment,
    },
  });
});

const TreatmentController = {
  getAllTreatmentsCtrl,
  postCreateTreatmentCtrl,
  getOneTreatmentCtrl,
  patchTreatmentCtrl,
  deleteTreatmentCtrl,
};

export default TreatmentController;
