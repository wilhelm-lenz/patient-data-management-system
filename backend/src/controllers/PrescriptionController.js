import { OK, CREATED, NO_CONTENT } from "../data-access/httpStatusCodes.js";
import { PrescriptionService } from "../services/index.js";
import { catchAsync } from "../utils/catchAsync.js";

export const getAllPrescriptionsCtrl = catchAsync(async (_, res) => {
  const allPrescriptions = await PrescriptionService.getAllPrescriptions();

  res.status(OK).json({
    status: "success",
    data: {
      Prescriptions: allPrescriptions,
    },
  });
});

export const postCreatePrescriptionCtrl = catchAsync(async (req, res) => {
  const newPrescription = await PrescriptionService.postAddPrescription(
    req.body
  );
  res.status(CREATED).json({
    status: "success",
    data: {
      Prescription: newPrescription,
    },
  });
});

export const getOnePrescriptionCtrl = catchAsync(async (req, res) => {
  const prescriptionId = req.params.id;
  const newPrescription = await PrescriptionService.getOnePrescription(
    prescriptionId
  );
  res.status(OK).json({
    status: "success",
    data: {
      Prescription: newPrescription,
    },
  });
});

export const patchPrescriptionCtrl = catchAsync(async (req, res) => {
  const prescriptionId = req.params.id;
  const newPrescription = await PrescriptionService.patchPrescription(
    prescriptionId,
    req.body
  );
  res.status(OK).json({
    status: "success",
    data: {
      Prescription: newPrescription,
    },
  });
});

export const deletePrescriptionCtrl = catchAsync(async (req, res) => {
  const prescriptionId = req.params.id;
  const newPrescription = await PrescriptionService.deletePrescription(
    prescriptionId
  );
  res.status(NO_CONTENT).json({
    status: "success",
    data: {
      Prescription: newPrescription,
    },
  });
});

const PrescriptionController = {
  getAllPrescriptionsCtrl,
  postCreatePrescriptionCtrl,
  getOnePrescriptionCtrl,
  patchPrescriptionCtrl,
  deletePrescriptionCtrl,
};

export default PrescriptionController;
