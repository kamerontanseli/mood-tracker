const express = require("express");
const path = require("path");
const app = express();
const bodyParser = require("body-parser");
const port = 3000;

const insights = [];

app.use(express.static("public"));
app.use(bodyParser.json());

app.get("/api/insights", (req, res) => {
  res.send(insights.slice(0, 10));
});

app.post("/api/insights", (req, res) => {
  insights.unshift(
    Object.assign({}, req.body, {
      date: Date.now()
    })
  );
  res.send({ done: true });
});

app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "public/index.html"))
);

app.get("/*", (req, res) => res.sendFile(path.join(__dirname, "public/index.html")));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
