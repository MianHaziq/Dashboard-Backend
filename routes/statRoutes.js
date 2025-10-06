import express from "express";
import { getUserStats } from "../controllers/statController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", authMiddleware, getUserStats);

export default router;
