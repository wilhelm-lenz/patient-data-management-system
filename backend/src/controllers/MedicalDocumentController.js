import { OK, CREATED, NO_CONTENT } from "../data-access/httpStatusCodes.js";
import { MedicalDocumentService } from "../services/index.js";
import { catchAsync } from "../utils/catchAsync.js";

export const getAllMedicalDocumentsCtrl = catchAsync(async (_, res) => {
  const allMedicalDocuments =
    await MedicalDocumentService.getAllMedicalDocuments();

  res.status(OK).json({
    status: "success",
    data: {
      medicalDocuments: allMedicalDocuments,
    },
  });
});

export const postCreateMedicalDocumentCtrl = catchAsync(async (req, res) => {
  const newMedicalDocument =
    await MedicalDocumentService.postAddMedicalDocument(req.body);
  res.status(CREATED).json({
    status: "success",
    data: {
      medicalDocument: newMedicalDocument,
    },
  });
});

export const getOneMedicalDocumentCtrl = catchAsync(async (req, res) => {
  const medicalDocumentId = req.params.id;
  const newMedicalDocument = await MedicalDocumentService.getOneMedicalDocument(
    medicalDocumentId
  );
  res.status(OK).json({
    status: "success",
    data: {
      medicalDocument: newMedicalDocument,
    },
  });
});

export const patchMedicalDocumentCtrl = catchAsync(async (req, res) => {
  const medicalDocumentId = req.params.id;
  const newMedicalDocument = await MedicalDocumentService.patchMedicalDocument(
    medicalDocumentId,
    req.body
  );
  res.status(OK).json({
    status: "success",
    data: {
      medicalDocument: newMedicalDocument,
    },
  });
});

export const deleteMedicalDocumentCtrl = catchAsync(async (req, res) => {
  const medicalDocumentId = req.params.id;
  const newMedicalDocument = await MedicalDocumentService.deleteMedicalDocument(
    medicalDocumentId
  );
  res.status(NO_CONTENT).json({
    status: "success",
    data: {
      medicalDocument: newMedicalDocument,
    },
  });
});

const MedicalDocumentController = {
  getAllMedicalDocumentsCtrl,
  postCreateMedicalDocumentCtrl,
  getOneMedicalDocumentCtrl,
  patchMedicalDocumentCtrl,
  deleteMedicalDocumentCtrl,
};

export default MedicalDocumentController;
