import fs from "fs";
import React from "react";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import App from "../../src/components/App";

export const renderAppToString = url =>
  ReactDOMServer.renderToString(
    <StaticRouter location={url} context={{}}>
      <App />
    </StaticRouter>
  );

export const insertComponent = (html, componentString) =>
  html.replace(
    /<div id="app"><\/div>/,
    `<div id="app">${componentString}</div>`
  );

export const renderApp = (req, res) =>
  fs.readFile("./public/app.html", "utf8", function(err, html) {
    if (err) throw err;
    res.send(insertComponent(html, renderAppToString(req.url)));
  });
