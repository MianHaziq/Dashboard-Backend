import express from "express";
import { signup, login } from "../controllers/auth.js";
import {getUser} from "../controllers/getUser.js";
import { authMiddleware } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);

// i am making a new api to get user detail with token.
router.get("/getUser",authMiddleware,getUser)

export default router;
