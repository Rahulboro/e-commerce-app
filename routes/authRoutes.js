import express from "express";
import {
  registerControler,
  loginController,
  testController,
} from "../controller/authController.js";
import { requireSignIn } from "../middleware/authMiddleware.js";

// router object
const router = new express.Router();

//routing object
router.post("/register", registerControler);

// LOGIN POST
router.post("/login", loginController);

// test routes
router.get("/test", requireSignIn, testController);

export default router;
