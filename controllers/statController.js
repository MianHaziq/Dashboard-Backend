import { db } from "../models/db.js";
import { stats } from "../models/statModel.js";
import { eq } from "drizzle-orm";

export const getUserStats = async (req, res) => {
  try {
    const userId = req.user.id;

    const defaultStats = [
      {
        title: "Article Completed",
        total: 233,
        image: "/article.png",
        userId: userId,
      },
      {
        title: "Vocabulary Learned",
        total: 12344,
        image: "/dictionary.png",
        userId: userId,
      },
      {
        title: "Speaking Activities",
        total: 678,
        image: "/speaking.png",
        userId: userId,
      },
    ];

    const existingStats = await db
      .select()
      .from(stats)
      .where(eq(stats.userId, userId));

    if (existingStats.length === 0) {
      await db.insert(stats).values(defaultStats);
    }

    const userStats = await db
      .select()
      .from(stats)
      .where(eq(stats.userId, userId));

    res.json(userStats);
  } catch (error) {
    console.error("Error fetching stats:", error);
    res.status(500).json({ message: "Server error while fetching stats" });
  }
};
