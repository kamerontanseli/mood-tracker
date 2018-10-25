import React from "react";
import Progress from "../general/Progress";
import Header2 from "../general/Header2";
import { getMood } from "../../utils/string";
import { insightAverage } from "../../utils/array";

const InsightTotal = ({ insights }) => (
  <React.Fragment>
    <Progress value={insightAverage(insights)} max={7} />
    <Header2>
      Your average mood is <strong>{getMood(Math.round(insightAverage(insights)))}</strong>
    </Header2>
  </React.Fragment>
);

export default InsightTotal;
