import "./CommentStep.css";
import React from "react";
import Button from "../../general/Button";
import Panel from "../../general/Panel";
import Header1 from "../../general/Header1";
import TextArea from "../../general/TextArea";

const CommentStep = ({ value, onChange, onNext, onBack }) => (
  <Panel>
    <div className="CommentStep">
      <div className="CommentStep-title">
        <Header1>Anything else to add?</Header1>
      </div>
      <div className="CommentStep-input">
        <TextArea
          cols="30"
          rows="10"
          placeholder="Enter any extra notes about how you feel here..."
          value={value}
          onChange={onChange}
        />
      </div>
      <div className="CommentStep-controls">
        <Button onClick={onBack}>Back</Button>
        <Button onClick={onNext}>Continue</Button>
      </div>
    </div>
  </Panel>
);

export default CommentStep;
