CREATE TABLE "stats" (
	"id" uuid PRIMARY KEY NOT NULL,
	"title" text NOT NULL,
	"total" integer NOT NULL,
	"image" text NOT NULL,
	"user_id" uuid NOT NULL
);
--> statement-breakpoint
ALTER TABLE "stats" ADD CONSTRAINT "stats_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;