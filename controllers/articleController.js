import { db } from "../models/db.js";
import { articles } from "../models/articleModel.js";
import { eq } from "drizzle-orm";

export const getUserArticles = async (req, res) => {
  try {
    const userId = req.user.id;

    if (!userId) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const existing = await db
      .select()
      .from(articles)
      .where(eq(articles.userId, userId));

    if (existing.length === 0) {
      const defaultArticles = [
        {
          channel: "Al Jazeera",
          url: "#",
          cimage: "/jazeera.png",
          time: "• 7 min read",
          category: "🏛️ Politics",
          catImage: "",
          level: "ILR Level: 2-Moderate",
          levImage: "",
          title: "جدعون ليفي: إسرائيل ليست أسدا صاعدا وإنما هي أسد مريض",
          content:
            "يرى ليفي أن مصير الحرب مرهون بنزوات رئيس أميركي “متقلب المزاج” و “ثرثار”، فإذا قرر أن يقصف إيران فقد يتحقق انتصار، وإذا لم يقصفها تكون إسرائيل قد دخلت حربا عبثية أخرى وأشد خطورة من سابقاتها كلها \n. يرى ليفي أن مصير الحرب مرهون بنزوات رئيس أميركي “متقلب المزاج” و “ثرثار”، فإذا قرر أن يقصف إيران فقد يتحقق",
          progress: 0,
          userId,
        },
        {
          channel: "Al Jazeera",
          url: "#",
          cimage: "/jazeera.png",
          time: "• 7 min read",
          category: "🏛️ Politics",
          catImage: "",
          level: "ILR Level: 2-Moderate",
          levImage: "",
          title: "جدعون ليفي: إسرائيل ليست أسدا صاعدا وإنما هي أسد مريض",
          content:
            "يرى ليفي أن مصير الحرب مرهون بنزوات رئيس أميركي “متقلب المزاج” و “ثرثار”، فإذا قرر أن يقصف إيران فقد يتحقق انتصار، وإذا لم يقصفها تكون إسرائيل قد دخلت حربا عبثية أخرى وأشد خطورة من سابقاتها كلها \n. يرى ليفي أن مصير الحرب مرهون بنزوات رئيس أميركي “متقلب المزاج” و “ثرثار”، فإذا قرر أن يقصف إيران فقد يتحقق",
          progress: 47,
          userId,
        },
      ];

      await db.insert(articles).values(defaultArticles);
    }

    const userArticles = await db
      .select()
      .from(articles)
      .where(eq(articles.userId, userId));

    return res.status(200).json(userArticles);
  } catch (error) {
    console.error("getUserArticles error:", error);
    return res
      .status(500)
      .json({ message: "Server error while fetching articles" });
  }
};
