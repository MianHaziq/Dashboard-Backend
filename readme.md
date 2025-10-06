dashboard


#  PostgreSQL + Express + Drizzle ORM Backend

A simple backend project using **Node.js**, **Express**, **PostgreSQL**, and **Drizzle ORM**, following the **MVC architecture**.

---

##  Folder Structure

server/
│
├── config/ # Docs & config files
│ ├── article.docs.js
│ ├── drizzle.config.js
│ ├── stat.docs.js
│ ├── streak.docs.js
│ └── user.docs.js
│
├── controllers/ # Business logic
│ ├── articleController.js
│ ├── auth.js
│ ├── getUser.js
│ ├── statController.js
│ └── streakController.js
│
├── drizzle/ # Auto-generated Drizzle migration files
│ └── meta/
│ ├── 0000_fantastic_loki.sql
│ ├── 0001_gifted_squadron_sinister.sql
│ ├── 0002_brave_jackpot.sql
│ ├── 0003_broad_chat.sql
│ └── 0004_tricky_thena.sql
│
├── middleware/
│ └── authMiddleware.js
│
├── models/
│ ├── articleModel.js
│ ├── db.js
│ └── statModel.js
│
├── .env # Environment variables
├── drizzle.config.js # Drizzle CLI configuration
├── index.js # Entry point
├── package.json
└── README.md


---

## 🛠️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/MianHaziq/Dashboard.git
   cd server

npm install

## Configure environment
 1. **Create a .env file in the root with:**
  DATABASE_URL=postgres://username:password@localhost:5432/your_db_name
  PORT=5000
  JWT_SECRET=YOUR_JWT_SECRET

## Set up Drizzle

1. **Generate migrations:**
  npm run db:generate

2. **Push schema to database:**
  npm run db:push

3. **Run the server**
  npm start

Server will run on http://localhost:5000


## Tech Stack

Node.js
Express.js
PostgreSQL
Drizzle ORM
dotenv
MVC Architecture

