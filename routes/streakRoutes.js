import express from "express";
import { getUserStreakCount } from "../controllers/streakController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", authMiddleware, getUserStreakCount);

export default router;
