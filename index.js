const express = require("express");
const app = express();
const PORT = 3000;

// Middleware to read form data
app.use(express.urlencoded({ extended: true }));

// In-memory storage (temporary)
let entries = [];

// Home page
app.get("/", (req, res) => {
  let listItems = entries
    .map(entry => `<li>${entry}</li>`)
    .join("");

  res.send(`
    <html>
      <head>
        <title>Daily Log</title>
      </head>
      <body style="font-family: Arial; padding: 40px;">
        <h1>📝 Daily Log</h1>

        <form method="POST" action="/add">
          <input 
            type="text" 
            name="entry" 
            placeholder="Write something..." 
            required 
            style="padding: 8px; width: 300px;"
          />
          <button type="submit" style="padding: 8px;">
            Add
          </button>
        </form>

        <h2>Entries</h2>
        <ul>
          ${listItems}
        </ul>
      </body>
    </html>
  `);
});

// Handle form submission
app.post("/add", (req, res) => {
  const newEntry = req.body.entry;
  entries.push(newEntry);
  res.redirect("/");
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});