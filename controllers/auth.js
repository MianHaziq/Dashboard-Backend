import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { db } from "../models/db.js";
import { users } from "../models/userModel.js"; 
import { eq } from "drizzle-orm";
import { v4 as uuidv4 } from "uuid";
import 'dotenv/config';

export const signup = async (req, res) => {
  try {
    const { firstName, lastName, email, password, image } = req.body;
    if (!firstName || !lastName || !email || !password) {
      return res.status(400).json({ message: "All required fields must be provided" });
    }

    const existingUser = await db.select().from(users).where(eq(users.email, email));
    if (existingUser.length > 0) {
      return res.status(400).json({ message: "User already exists" });
    }

    const salt = 10;
    const hashedPassword = await bcrypt.hash(password, salt);

    const id = uuidv4();
    await db.insert(users).values({
      id,
      firstName,
      lastName,
      email,
      password: hashedPassword,
      image: image || null,
    });

   

    res.status(201).json({ message: "User created successfully", user: { id, firstName, lastName, email, image } });
  } catch (error) {
    console.error("Signup error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const existingUser = await db.select().from(users).where(eq(users.email, email));
    if (existingUser.length === 0) {
      return res.status(404).json({ message: "User not found" });
    }

    const user = existingUser[0];
    const valid = await bcrypt.compare(password, user.password);
    if (!valid) return res.status(401).json({ message: "Invalid credentials" });

    const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET, { expiresIn: "7d" });

    res.json({
      message: "Login successful",
      token,
      user: {
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        image: user.image,
      },
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
