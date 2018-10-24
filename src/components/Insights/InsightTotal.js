import React from "react";
import Progress from "../general/Progress";
import Header2 from "../general/Header2";
import { getMood } from "../../utils/string";

const InsightTotal = ({ insights }) => {
  const moods = insights.map(insight => insight.mood)
  const summation = moods.reduce((a, b) => a + b, 0) 
  const average = summation / insights.length;
  return (
    <React.Fragment>
      <Progress value={isNaN(average) ? 0 : average} max={7} />
      <Header2>
        Your average mood is <strong>{getMood(average)}</strong>
      </Header2>
    </React.Fragment>
  );
};

export default InsightTotal;
