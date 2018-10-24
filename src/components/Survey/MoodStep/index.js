import "./MoodStep.css";
import React from "react";
import Button from "../../general/Button";
import Panel from "../../general/Panel";
import Header1 from "../../general/Header1";
import Header2 from "../../general/Header2";
import RangeInput from "../../general/RangeInput";
import { getMood } from "../../../utils/string";

const MoodStep = ({ value, onChange, onNext }) => (
  <Panel>
    <div className="MoodStep">
      <div className="MoodStep-title">
        <Header1>How do you feel?</Header1>
        <Header2>{getMood(value)}</Header2>
      </div>
      <div className="MoodStep-input">
        <RangeInput max={7} min={1} value={value} onChange={onChange} />
      </div>
      <div className="MoodStep-controls">
        <Button onClick={onNext}>Continue</Button>
      </div>
    </div>
  </Panel>
);

export default MoodStep;
