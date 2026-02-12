const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));

const filePath = path.join(__dirname, "post.json");

app.get("/post", (req, res) => {
  res.send(`
    <form method="POST" action="/post">
      <input name="text" required />
      <button type="submit">Salva</button>
    </form>
  `);
});

app.post("/post", (req, res) => {
  let data = [];

  try {
    data = JSON.parse(fs.readFileSync(filePath));
  } catch {}

  data.push(req.body.text);

  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));

  res.redirect("/post");
});

app.listen(PORT, () => {
  console.log("Server avviato su porta 3000");
});
