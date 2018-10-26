import "ignore-styles";
import express from "express";
import bodyParser from "body-parser";
import { renderApp } from "./server/utils/ssr";
import insights from './server/routes/insights'

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.json());
app.use('/api/insights', insights)

app.get("*", renderApp);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
