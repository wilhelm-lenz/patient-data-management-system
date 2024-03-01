import {
  OK,
  CREATED,
  NO_CONTENT,
  BAD_REQUEST,
  INTERNAL_SERVER_ERROR,
} from "../data-access/httpStatusCodes.js";
import { MedicationService } from "../services/index.js";

export const getAllMedicationsCtrl = async (req, res) => {
  try {
    const allMedications = await MedicationService.getAllMedications();

    res.status(OK).json({
      status: "success",
      data: {
        Medications: allMedications,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(INTERNAL_SERVER_ERROR).json({
      status: "fail",
      error,
      message: error.message || "Could not retrive Medications",
    });
  }
};

export const postCreateMedicationCtrl = async (req, res) => {
  try {
    const newMedication = await MedicationService.postAddMedication(req.body);
    res.status(OK).json({
      status: "success",
      data: {
        Medication: newMedication,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(INTERNAL_SERVER_ERROR).json({
      status: "fail",
      error,
      message: error.message || "Could not create Medication",
    });
  }
};

export const getOneMedicationCtrl = async (req, res) => {
  try {
    const medicationId = req.params.id;
    const newMedication = await MedicationService.getOneMedication(
      medicationId
    );
    res.status(OK).json({
      status: "success",
      data: {
        Medication: newMedication,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(INTERNAL_SERVER_ERROR).json({
      status: "fail",
      error,
      message: error.message || "Could not create Medication",
    });
  }
};

export const patchMedicationCtrl = async (req, res) => {
  try {
    const medicationId = req.params.id;
    const newMedication = await MedicationService.patchMedication(
      medicationId,
      req.body
    );
    res.status(OK).json({
      status: "success",
      data: {
        Medication: newMedication,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(INTERNAL_SERVER_ERROR).json({
      status: "fail",
      error,
      message: error.message || "Could not create Medication",
    });
  }
};

export const deleteMedicationCtrl = async (req, res) => {
  try {
    const medicationId = req.params.id;
    const newMedication = await MedicationService.deleteMedication(
      medicationId
    );
    res.status(OK).json({
      status: "success",
      data: {
        Medication: newMedication,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(INTERNAL_SERVER_ERROR).json({
      status: "fail",
      error,
      message: error.message || "Could not create Medication",
    });
  }
};

const MedicationController = {
  getAllMedicationsCtrl,
  postCreateMedicationCtrl,
  getOneMedicationCtrl,
  patchMedicationCtrl,
  deleteMedicationCtrl,
};

export default MedicationController;
