import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import userRoutes from "./routes/userRoutes.js";
import { setupSwagger } from "./swagger.js";
import streakRoutes from "./routes/streakRoutes.js";
import statRoutes from "./routes/statRoutes.js";

import articlesRouter from "./routes/articleRoutes.js";

dotenv.config();

const app = express();

app.use(cors({
  origin: "http://localhost:5173",
  credentials: true,
}));
app.use(express.json());

app.use("/api/users", userRoutes);
app.use("/api/streaks", streakRoutes);
app.use("/api/stats", statRoutes);
app.use("/api/articles", articlesRouter);


setupSwagger(app);

app.get("/", (req, res) => {
  res.send("Server is running with PostgreSQL + Drizzle");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(` Server running at http://localhost:${PORT}`);
  console.log(` Swagger docs available at http://localhost:${PORT}/api-docs`);
});
