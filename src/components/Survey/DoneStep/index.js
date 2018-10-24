import "./DoneStep.css";
import React from "react";
import { Link } from 'react-router-dom'
import Panel from "../../general/Panel";
import Header1 from "../../general/Header1";

const DoneStep = ({  }) => (
  <Panel>
    <div className="DoneStep">
      <div className="DoneStep-title">
        <Header1>Survey completed!</Header1>
      </div>
      <div className="DoneStep-controls">
        <Link to="/">Go to your insights</Link>
      </div>
    </div>
  </Panel>
);

export default DoneStep;
