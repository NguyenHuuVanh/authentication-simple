import express from "express";
import * as authController from "../controllers/auth.controller.js";
import { validateSignup, validateSignin, verifyToken } from "../middleware/validation.middleware.js";

const router = express.Router();

// signup route
router.post("/signup", validateSignup, authController.signup);
// login route
router.post("/signin", validateSignin, authController.signin);
// logout route
router.post("/logout", authController.signout);
// refresh token route
router.post("/refresh-token", authController.refreshToken);
// get user profile route
router.get("/profile", verifyToken, authController.getProfile);

export default router;
