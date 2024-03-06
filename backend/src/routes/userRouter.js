import express from "express";
import { AuthController, UserController } from "../controllers/index.js";

const router = express.Router();

router.post("/signup", AuthController.signup);
router.post("/login", AuthController.login);

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
