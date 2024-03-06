import { deleteAppointment } from "./appointmentService/deleteAppointment.js";
import { getAllAppointments } from "./appointmentService/getAllAppointments.js";
import { getOneAppointment } from "./appointmentService/getOneAppointment.js";
import { patchAppointment } from "./appointmentService/patchAppointment.js";
import { postAddAppointment } from "./appointmentService/postAddAppointment.js";

import { deleteDoctor } from "./doctorService/deleteDoctor.js";
import { getAllDoctors } from "./doctorService/getAllDoctors.js";
import { getOneDoctor } from "./doctorService/getOneDoctor.js";
import { patchDoctor } from "./doctorService/patchDoctor.js";
import { postAddDoctor } from "./doctorService/postAddDoctor.js";

import { deleteEmployee } from "./employeeService/deleteEmployee.js";
import { getAllEmployees } from "./employeeService/getAllEmployees.js";
import { getOneEmployee } from "./employeeService/getOneEmployee.js";
import { patchEmployee } from "./employeeService/patchEmployee.js";
import { postAddEmployee } from "./employeeService/postAddEmployee.js";

import { deleteMedicalDocument } from "./medicalDocumentService/deleteMedicalDocument.js";
import { getAllMedicalDocuments } from "./medicalDocumentService/getAllMedicalDocuments.js";
import { getOneMedicalDocument } from "./medicalDocumentService/getOneMedicalDocument.js";
import { patchMedicalDocument } from "./medicalDocumentService/patchMedicalDocument.js";
import { postAddMedicalDocument } from "./medicalDocumentService/postAddMedicalDocument.js";

import { deleteMedication } from "./medicationService/deleteMedication.js";
import { getAllMedications } from "./medicationService/getAllMedications.js";
import { getOneMedication } from "./medicationService/getOneMedication.js";
import { patchMedication } from "./medicationService/patchMedication.js";
import { postAddMedication } from "./medicationService/postAddMedication.js";

import { deletePatient } from "./patientService/deletePatient.js";
import { getAllPatients } from "./patientService/getAllPatients.js";
import { getOnePatient } from "./patientService/getOnePatient.js";
import { patchPatient } from "./patientService/patchPatient.js";
import { postAddPatient } from "./patientService/postAddPatient.js";

import { deletePrescription } from "./prescriptionService/deletePrescription.js";
import { getAllPrescriptions } from "./prescriptionService/getAllPrescriptions.js";
import { getOnePrescription } from "./prescriptionService/getOnePrescription.js";
import { patchPrescription } from "./prescriptionService/patchPrescription.js";
import { postAddPrescription } from "./prescriptionService/postAddPrescription.js";

import { deleteTreatment } from "./treatmentService/deleteTreatment.js";
import { getAllTreatments } from "./treatmentService/getAllTreatments.js";
import { getOneTreatment } from "./treatmentService/getOneTreatment.js";
import { patchTreatment } from "./treatmentService/patchTreatment.js";
import { postAddTreatment } from "./treatmentService/postAddTreatment.js";

import { deleteUser } from "./userService/deleteUser.js";
import { getAllUsers } from "./userService/getAllUsers.js";
import { getOneUser } from "./userService/getOneUser.js";
import { patchUser } from "./userService/patchUser.js";
// import { postAddUser } from "./userService/postAddUser.js";

const AppointmentService = {
  deleteAppointment,
  getAllAppointments,
  getOneAppointment,
  patchAppointment,
  postAddAppointment,
};

const DoctorService = {
  deleteDoctor,
  getAllDoctors,
  getOneDoctor,
  patchDoctor,
  postAddDoctor,
};

const EmployeeService = {
  deleteEmployee,
  getAllEmployees,
  getOneEmployee,
  patchEmployee,
  postAddEmployee,
};

const MedicalDocumentService = {
  deleteMedicalDocument,
  getAllMedicalDocuments,
  getOneMedicalDocument,
  patchMedicalDocument,
  postAddMedicalDocument,
};

const MedicationService = {
  deleteMedication,
  getAllMedications,
  getOneMedication,
  patchMedication,
  postAddMedication,
};

const PatientService = {
  deletePatient,
  getAllPatients,
  getOnePatient,
  patchPatient,
  postAddPatient,
};

const PrescriptionService = {
  deletePrescription,
  getAllPrescriptions,
  getOnePrescription,
  patchPrescription,
  postAddPrescription,
};

const TreatmentService = {
  deleteTreatment,
  getAllTreatments,
  getOneTreatment,
  patchTreatment,
  postAddTreatment,
};

const UserService = {
  deleteUser,
  getAllUsers,
  getOneUser,
  patchUser,
  // postAddUser,
};

export {
  AppointmentService,
  DoctorService,
  EmployeeService,
  MedicalDocumentService,
  MedicationService,
  PatientService,
  PrescriptionService,
  TreatmentService,
  UserService,
};
