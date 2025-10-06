
import { db } from "../models/db.js";
import { users } from "../models/userModel.js";
import { eq } from "drizzle-orm";


export const getUser = async (req, res) => {
  try {
    const userId = req.userId;

    const [user] = await db.select().from(users).where(eq(users.id, userId));
    if (!user) return res.status(404).json({ message: "User not found" });

    const { id, firstName, lastName, email, image } = user;
    res.json({ id, firstName, lastName, email, image });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};
