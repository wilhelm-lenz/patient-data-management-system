import { OK, CREATED, NO_CONTENT } from "../data-access/httpStatusCodes.js";
import { MedicationService } from "../services/index.js";
import { catchAsync } from "../utils/catchAsync.js";

export const getAllMedicationsCtrl = catchAsync(async (_, res) => {
  const allMedications = await MedicationService.getAllMedications();

  res.status(OK).json({
    status: "success",
    data: {
      medications: allMedications,
    },
  });
});

export const postCreateMedicationCtrl = catchAsync(async (req, res) => {
  const newMedication = await MedicationService.postAddMedication(req.body);
  res.status(CREATED).json({
    status: "success",
    data: {
      medication: newMedication,
    },
  });
});

export const getOneMedicationCtrl = catchAsync(async (req, res) => {
  const medicationId = req.params.id;
  const newMedication = await MedicationService.getOneMedication(medicationId);
  res.status(OK).json({
    status: "success",
    data: {
      medication: newMedication,
    },
  });
});

export const patchMedicationCtrl = catchAsync(async (req, res) => {
  const medicationId = req.params.id;
  const newMedication = await MedicationService.patchMedication(
    medicationId,
    req.body
  );
  res.status(OK).json({
    status: "success",
    data: {
      medication: newMedication,
    },
  });
});

export const deleteMedicationCtrl = catchAsync(async (req, res) => {
  const medicationId = req.params.id;
  const newMedication = await MedicationService.deleteMedication(medicationId);
  res.status(NO_CONTENT).json({
    status: "success",
    data: {
      medication: newMedication,
    },
  });
});

const MedicationController = {
  getAllMedicationsCtrl,
  postCreateMedicationCtrl,
  getOneMedicationCtrl,
  patchMedicationCtrl,
  deleteMedicationCtrl,
};

export default MedicationController;
