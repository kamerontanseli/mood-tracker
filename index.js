import "ignore-styles";
import fs from "fs";
import express from "express";
import bodyParser from "body-parser";
import React from "react";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import App from "./src/components/App";

const app = express();
const port = 3000;

const insights = [];

function handleRender(req, res) {
  const context = {};
  const app = ReactDOMServer.renderToString(
    <StaticRouter location={req.url} context={context}>
      <App />
    </StaticRouter>
  );

  fs.readFile("./public/index.html", "utf8", function(err, data) {
    if (err) throw err;
    const document = data.replace(
      /<div id="app"><\/div>/,
      `<div id="app">${app}</div>`
    );
    res.send(document);
  });
}

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

app.get("*", handleRender);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
