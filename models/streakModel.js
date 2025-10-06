import { pgTable, uuid as pgUuid, integer, timestamp } from "drizzle-orm/pg-core";
import { v4 as uuidv4 } from "uuid";
import { users } from "./userModel.js";

export const streaks = pgTable("streaks", {
  id: pgUuid("id").default(() => uuidv4()).primaryKey(),
  userId: pgUuid("user_id")
    .notNull()
    .references(() => users.id),
  count: integer("count").default(0),
  createdAt: timestamp("created_at").defaultNow(),
});
