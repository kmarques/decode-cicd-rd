const express = require("express");
const jwt = require("jsonwebtoken");
const process = require("process");

if (!process.env.JWT_SECRET) {
  console.error("JWT_SECRET environment variable is not set.");
  process.exit(1);
}

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/health", (req, res) => {
  res.sendStatus(200);
});

app.get("/db", async (req, res) => {
  const { Client } = require("pg");
  const client = new Client({
    connectionString: process.env.DATABASE_URL,
  });
  try {
    await client.connect();
    const result = await client.query("SELECT NOW()");
    res.json({ time: result.rows[0].now });
  } catch (err) {
    console.error("Database connection error:", err);
    res.status(500).json({ error: "Database connection error" });
  } finally {
    await client.end();
  }
});

app.get("/auth/login", (req, res) => {
  const token = jwt.sign(
    {
      uid: Date.now(),
    },
    process.env.JWT_SECRET,
  );
  res.json({ token });
});

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server is running on port ${process.env.PORT || 3000}`);
});
