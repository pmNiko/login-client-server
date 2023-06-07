import { Router } from "express";
import controller from "../controllers";
import middleware from "../middlewares";

const router = Router();

router.post("/login", controller.login);
router.post("/profile", middleware.requireAuth, controller.profile);

export default router;
