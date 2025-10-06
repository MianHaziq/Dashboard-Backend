import { pgTable, uuid, text, integer } from "drizzle-orm/pg-core";
import { users } from "./userModel.js"; 

export const articles = pgTable("articles", {
  id: uuid("id").defaultRandom().primaryKey(),
  channel: text("channel").notNull(),
  url: text("url").notNull(),
  cimage: text("cimage").notNull(),
  time: text("time").notNull(),
  category: text("category").notNull(),
  catImage: text("cat_image").notNull(),
  level: text("level").notNull(),
  levImage: text("lev_image").notNull(),
  title: text("title").notNull(),
  content: text("content").notNull(),
  progress: integer("progress").default(0),
  userId: uuid("user_id")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
});
