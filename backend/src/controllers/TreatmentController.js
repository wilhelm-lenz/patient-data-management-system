import {
  OK,
  CREATED,
  NO_CONTENT,
  BAD_REQUEST,
  INTERNAL_SERVER_ERROR,
} from "../data-access/httpStatusCodes.js";
import { TreatmentService } from "../services/index.js";

export const getAllTreatmentsCtrl = async (req, res) => {
  try {
    const allTreatments = await TreatmentService.getAllTreatments();

    res.status(OK).json({
      status: "success",
      data: {
        Treatments: allTreatments,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(INTERNAL_SERVER_ERROR).json({
      status: "fail",
      error,
      message: error.message || "Could not retrive Treatments",
    });
  }
};

export const postCreateTreatmentCtrl = async (req, res) => {
  try {
    const newTreatment = await TreatmentService.postAddTreatment(req.body);
    res.status(OK).json({
      status: "success",
      data: {
        Treatment: newTreatment,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(INTERNAL_SERVER_ERROR).json({
      status: "fail",
      error,
      message: error.message || "Could not create Treatment",
    });
  }
};

export const getOneTreatmentCtrl = async (req, res) => {
  try {
    const treatmentId = req.params.id;
    const newTreatment = await TreatmentService.getOneTreatment(treatmentId);
    res.status(OK).json({
      status: "success",
      data: {
        Treatment: newTreatment,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(INTERNAL_SERVER_ERROR).json({
      status: "fail",
      error,
      message: error.message || "Could not create Treatment",
    });
  }
};

export const patchTreatmentCtrl = async (req, res) => {
  try {
    const treatmentId = req.params.id;
    const newTreatment = await TreatmentService.getOneTreatment(treatmentId);
    res.status(OK).json({
      status: "success",
      data: {
        Treatment: newTreatment,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(INTERNAL_SERVER_ERROR).json({
      status: "fail",
      error,
      message: error.message || "Could not create Treatment",
    });
  }
};

export const deleteTreatmentCtrl = async (req, res) => {
  try {
    const treatmentId = req.params.id;
    const newTreatment = await TreatmentService.getOneTreatment(treatmentId);
    res.status(OK).json({
      status: "success",
      data: {
        Treatment: newTreatment,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(INTERNAL_SERVER_ERROR).json({
      status: "fail",
      error,
      message: error.message || "Could not create Treatment",
    });
  }
};

const TreatmentController = {
  getAllTreatmentsCtrl,
  postCreateTreatmentCtrl,
  getOneTreatmentCtrl,
  patchTreatmentCtrl,
  deleteTreatmentCtrl,
};

export default TreatmentController;
