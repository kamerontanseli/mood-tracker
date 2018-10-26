import "./FeelingsStep.css";
import React from "react";
import Button from "../../general/Button";
import Panel from "../../general/Panel";
import Header1 from "../../general/Header1";

export const ALL_FEELINGS = [
  "depressed",
  "optimistic",
  "bored",
  "happy",
  "woeful",
  "playful",
  "peaceful"
];

export const Feeling = ({ checked, onChange, value }) => (
  <React.Fragment>
    <input
      checked={checked}
      onChange={onChange}
      type="checkbox"
      name={value}
      id={value}
    />
    <label className="FeelingsStep-grid-label" htmlFor={value}>
      {value}
    </label>
  </React.Fragment>
);

const FeelingsStep = ({ feelings, onChange, onNext, onBack }) => (
  <Panel>
    <div className="FeelingsStep">
      <div className="FeelingsStep-title">
        <Header1>What emotions are you feeling?</Header1>
      </div>
      <div className="FeelingsStep-grid">
        {ALL_FEELINGS.map(feeling => (
          <Feeling
            checked={feelings.indexOf(feeling) > -1}
            onChange={onChange}
            value={feeling}
            key={feeling}
          />
        ))}
      </div>
      <div className="FeelingsStep-controls">
        <Button data-test="back" onClick={onBack}>
          Back
        </Button>
        <Button
          data-test="next"
          disabled={feelings.length < 1}
          onClick={onNext}
        >
          Continue
        </Button>
      </div>
    </div>
  </Panel>
);

FeelingsStep.defaultProps = {
  feelings: []
}

export default FeelingsStep;
