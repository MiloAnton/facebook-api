import { Router } from "express";
import * as AuthController from "../../../controllers/auth.controller";

const router = Router();

// Provided routes in the exam subject
router.post("/login", AuthController.login);
router.post("/register", AuthController.register);

export default router;
