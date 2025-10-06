import { pgTable, uuid, text, integer } from "drizzle-orm/pg-core";
import { users } from "./userModel.js"; 

export const stats = pgTable("stats", {
  id: uuid("id").defaultRandom().primaryKey(),   
  title: text("title").notNull(),
  total: integer("total").notNull(),
  image: text("image").notNull(),
  userId: uuid("user_id")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
});
