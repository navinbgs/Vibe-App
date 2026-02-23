const express = require("express");
const path = require("path");
const serverless = require("serverless-http");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

let entries = [];

// API endpoint
app.get("/entries", (req, res) => {
  res.json(entries);
});

app.post("/add", (req, res) => {
  const newEntry = req.body.entry;
  entries.push(newEntry);
  res.redirect("/");
});

// Export instead of listen()
module.exports = app;
module.exports.handler = serverless(app);