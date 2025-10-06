import { pgTable, text, varchar ,uuid as pgUuid} from "drizzle-orm/pg-core";
import { v4 as uuidv4 } from "uuid";
export const users = pgTable("users", {
  id: pgUuid("id")
    .default(() => uuidv4()) 
    .primaryKey(),
  firstName: varchar("first_name", { length: 100 }).notNull(),
  lastName: varchar("last_name", { length: 100 }).notNull(),
  email: varchar("email", { length: 150 }).notNull().unique(),
  password: text("password").notNull(),
  image: text("image"), 
});
