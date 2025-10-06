import { db } from "../models/db.js";
import { streaks } from "../models/streakModel.js";
import { users } from "../models/userModel.js";
import { eq } from "drizzle-orm";
import { v4 as uuidv4 } from "uuid";


const isValidUUID = (id) => {
  if (typeof id !== "string") return false;
  return /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(id);
};


export const getUserStreakCount = async (req, res) => {
  try {
    const tokenPayload = req.user;
    let userId = req.userId;

    if (!tokenPayload) return res.status(401).json({ message: "Unauthorized" });

    if (!isValidUUID(userId)) {
      if (tokenPayload.email) {
        const [u] = await db.select().from(users).where(eq(users.email, tokenPayload.email));
        if (!u) {
          return res.status(401).json({ message: "Unauthorized: user not found" });
        }
        userId = u.id;
      } else {
        return res.status(401).json({ message: "Unauthorized: invalid user id in token" });
      }
    }

    const rows = await db.select().from(streaks).where(eq(streaks.userId, userId));

    if (!rows || rows.length === 0) {
      const randomCount = Math.floor(Math.random() * 10) + 1;
      const [created] = await db
        .insert(streaks)
        .values({
          id: uuidv4(),
          userId,
          count: randomCount,
        })
        .returning();

      return res.status(200).json(created.count); 
    }

    const latest = rows.reduce((a, b) => {
      const aTime = new Date(a.createdAt).getTime();
      const bTime = new Date(b.createdAt).getTime();
      return aTime >= bTime ? a : b;
    });

    return res.status(200).json(latest.count);
  } catch (err) {
    console.error("getUserStreakCount error:", err);
    return res.status(500).json({ message: "Server error" });
  }
};
