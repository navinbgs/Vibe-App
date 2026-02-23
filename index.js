const express = require("express");
const path = require("path");
const serverless = require("serverless-http");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve static files
app.use(express.static(path.join(__dirname, "public")));

let entries = [];

// ROOT ROUTE (IMPORTANT)
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// API endpoint
app.get("/entries", (req, res) => {
  res.json(entries);
});

// Handle form submission
app.post("/add", (req, res) => {
  const newEntry = req.body.entry;
  entries.push(newEntry);
  res.redirect("/");
});

module.exports = app;
module.exports.handler = serverless(app);