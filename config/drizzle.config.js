import 'dotenv/config';

/** @type { import("drizzle-kit").Config } */
export default {
  schema: "./models",            
  out: "./drizzle",              
  dialect: "postgresql",        
  dbCredentials: {
    url: process.env.DATABASE_URL,  
  },
};
