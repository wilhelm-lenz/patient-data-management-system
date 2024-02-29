import {
  OK,
  CREATED,
  NO_CONTENT,
  BAD_REQUEST,
  INTERNAL_SERVER_ERROR,
} from "../data-access/httpStatusCodes.js";
import { PrescriptionService } from "../services/index.js";

export const getAllPrescriptionsCtrl = async (req, res) => {
  try {
    const allPrescriptions = await PrescriptionService.getAllPrescriptions();

    res.status(OK).json({
      status: "success",
      data: {
        Prescriptions: allPrescriptions,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(INTERNAL_SERVER_ERROR).json({
      status: "fail",
      error,
      message: error.message || "Could not retrive Prescriptions",
    });
  }
};

export const postCreatePrescriptionCtrl = async (req, res) => {
  try {
    const newPrescription = await PrescriptionService.postAddPrescription(
      req.body
    );
    res.status(OK).json({
      status: "success",
      data: {
        Prescription: newPrescription,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(INTERNAL_SERVER_ERROR).json({
      status: "fail",
      error,
      message: error.message || "Could not create Prescription",
    });
  }
};

export const getOnePrescriptionCtrl = async (req, res) => {
  try {
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
  } catch (error) {
    console.log(error);
    res.status(INTERNAL_SERVER_ERROR).json({
      status: "fail",
      error,
      message: error.message || "Could not create Prescription",
    });
  }
};

export const patchPrescriptionCtrl = async (req, res) => {
  try {
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
  } catch (error) {
    console.log(error);
    res.status(INTERNAL_SERVER_ERROR).json({
      status: "fail",
      error,
      message: error.message || "Could not create Prescription",
    });
  }
};

export const deletePrescriptionCtrl = async (req, res) => {
  try {
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
  } catch (error) {
    console.log(error);
    res.status(INTERNAL_SERVER_ERROR).json({
      status: "fail",
      error,
      message: error.message || "Could not create Prescription",
    });
  }
};

const PrescriptionController = {
  getAllPrescriptionsCtrl,
  postCreatePrescriptionCtrl,
  getOnePrescriptionCtrl,
  patchPrescriptionCtrl,
  deletePrescriptionCtrl,
};

export default PrescriptionController;
