import express from "express";
import { EmployeeController } from "../controllers/index.js";

const router = express.Router();

router
  .route("/")
  .get(EmployeeController.getAllEmployeesCtrl)
  .post(EmployeeController.postCreateEmployeeCtrl);

router
  .route("/:id")
  .get(EmployeeController.getOneEmployeeCtrl)
  .patch(EmployeeController.patchEmployeeCtrl)
  .delete(EmployeeController.deleteEmployeeCtrl);

export default router;
