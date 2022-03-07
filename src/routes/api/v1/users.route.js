import { Router } from "express";
import * as PostsController from "../../../controllers/posts.controller";
import * as ProfileController from "../../../controllers/profile.controller";

const router = Router();

// Provided routes in the exam subject
router.get("/:id/posts", PostsController.findMany);
router.get("/:id/profile", ProfileController.returnProfile);
router.patch("/:id/profile", ProfileController.updateProfile);
router.delete("/:id", ProfileController.deleteUser);

export default router;
