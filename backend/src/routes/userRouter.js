import express from "express";
import { UserController } from "../controllers/index.js";

const router = express.Router();

router
  .route("/")
  .get(UserController.getAllUsersCtrl)
  .post(UserController.postCreateUserCtrl);

router
  .route("/:id")
  .get(UserController.getOneUserCtrl)
  .patch(UserController.patchUserCtrl)
  .delete(UserController.deleteUserCtrl);

export default router;
