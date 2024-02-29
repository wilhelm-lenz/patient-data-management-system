import {
  OK,
  CREATED,
  NO_CONTENT,
  BAD_REQUEST,
  INTERNAL_SERVER_ERROR,
} from "../data-access/httpStatusCodes.js";
import { MedicalDocumentService } from "../services/index.js";

export const getAllMedicalDocumentsCtrl = async (req, res) => {
  try {
    const allMedicalDocuments =
      await MedicalDocumentService.getAllMedicalDocuments();

    res.status(OK).json({
      status: "success",
      data: {
        MedicalDocuments: allMedicalDocuments,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(INTERNAL_SERVER_ERROR).json({
      status: "fail",
      error,
      message: error.message || "Could not retrive MedicalDocuments",
    });
  }
};

export const postCreateMedicalDocumentCtrl = async (req, res) => {
  try {
    const newMedicalDocument =
      await MedicalDocumentService.postAddMedicalDocument(req.body);
    res.status(OK).json({
      status: "success",
      data: {
        MedicalDocument: newMedicalDocument,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(INTERNAL_SERVER_ERROR).json({
      status: "fail",
      error,
      message: error.message || "Could not create MedicalDocument",
    });
  }
};

export const getOneMedicalDocumentCtrl = async (req, res) => {
  try {
    const medicalDocumentId = req.params.id;
    const newMedicalDocument =
      await MedicalDocumentService.getOneMedicalDocument(medicalDocumentId);
    res.status(OK).json({
      status: "success",
      data: {
        MedicalDocument: newMedicalDocument,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(INTERNAL_SERVER_ERROR).json({
      status: "fail",
      error,
      message: error.message || "Could not create MedicalDocument",
    });
  }
};

export const patchMedicalDocumentCtrl = async (req, res) => {
  try {
    const medicalDocumentId = req.params.id;
    const newMedicalDocument =
      await MedicalDocumentService.getOneMedicalDocument(medicalDocumentId);
    res.status(OK).json({
      status: "success",
      data: {
        MedicalDocument: newMedicalDocument,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(INTERNAL_SERVER_ERROR).json({
      status: "fail",
      error,
      message: error.message || "Could not create MedicalDocument",
    });
  }
};

export const deleteMedicalDocumentCtrl = async (req, res) => {
  try {
    const medicalDocumentId = req.params.id;
    const newMedicalDocument =
      await MedicalDocumentService.getOneMedicalDocument(medicalDocumentId);
    res.status(OK).json({
      status: "success",
      data: {
        MedicalDocument: newMedicalDocument,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(INTERNAL_SERVER_ERROR).json({
      status: "fail",
      error,
      message: error.message || "Could not create MedicalDocument",
    });
  }
};

const MedicalDocumentController = {
  getAllMedicalDocumentsCtrl,
  postCreateMedicalDocumentCtrl,
  getOneMedicalDocumentCtrl,
  patchMedicalDocumentCtrl,
  deleteMedicalDocumentCtrl,
};

export default MedicalDocumentController;
