import { Router } from "express";
import api from "./api/v1/index.js";

const router = Router();

// Provided routes in the exam subject
router.use("/api/v1", api);

export default router;
