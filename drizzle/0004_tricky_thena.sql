CREATE TABLE "articles" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"channel" text NOT NULL,
	"url" text NOT NULL,
	"cimage" text NOT NULL,
	"time" text NOT NULL,
	"category" text NOT NULL,
	"cat_image" text NOT NULL,
	"level" text NOT NULL,
	"lev_image" text NOT NULL,
	"title" text NOT NULL,
	"content" text NOT NULL,
	"progress" integer DEFAULT 0,
	"user_id" uuid NOT NULL
);
--> statement-breakpoint
ALTER TABLE "articles" ADD CONSTRAINT "articles_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;