import "./FeelingsStep.css";
import React from "react";
import Button from "../../general/Button";
import Panel from "../../general/Panel";
import Header1 from "../../general/Header1";

const FeelingsStep = ({ feelings, onChange, onNext, onBack }) => (
  <Panel>
    <div className="FeelingsStep">
      <div className="FeelingsStep-title">
        <Header1>What emotions are you feeling?</Header1>
      </div>
      <div className="FeelingsStep-grid">
        {[
          "depressed",
          "optimistic",
          "bored",
          "happy",
          "woeful",
          "playful",
          "peaceful"
        ].map(feeling => (
          <React.Fragment key={feeling}>
            <input
              checked={feelings.indexOf(feeling) > -1}
              onChange={onChange}
              type="checkbox"
              name={feeling}
              id={feeling}
            />
            <label className="FeelingsStep-grid-label" htmlFor={feeling}>
              {feeling}
            </label>
          </React.Fragment>
        ))}
      </div>
      <div className="FeelingsStep-controls">
        <Button onClick={onBack}>Back</Button>
        <Button disabled={feelings.length < 1} onClick={onNext}>Continue</Button>
      </div>
    </div>
  </Panel>
);

export default FeelingsStep;
