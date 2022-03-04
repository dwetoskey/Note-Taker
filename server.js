const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;
const notes = require("./db/db.json");


app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, "/public/index.html"));
});

app.get("/notes", function (req, res) {
  res.sendFile(path.join(__dirname, "/public/notes.html"));
});

app.route("/api/notes")
  .get



app.get("/public/notes", (req, res) => {
  res.json(notes);
});

app.listen(PORT, () => {
  console.log("App running on PORT " + PORT);
});
