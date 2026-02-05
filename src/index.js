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
