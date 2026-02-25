const express = require("express");
const path = require("path");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

let entries = [];

// Serve static files
app.use(express.static(path.join(__dirname, "../public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public", "index.html"));
});

app.get("/entries", (req, res) => {
  res.json(entries);
});

app.post("/add", (req, res) => {
  const newEntry = req.body.entry;
  entries.push(newEntry);
  res.redirect("/");
});

module.exports = app;