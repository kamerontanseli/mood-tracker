import "./Navigation.css";
import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => (
  <nav>
    <ul className="Navigation">
      <li className="Navigation-brand">
        <Link to="/">Moodr</Link>
      </li>
      <li className="Navigation-link">
        <Link to="/">Insights</Link>
      </li>
      <li className="Navigation-link">
        <Link to="/survey">Add Insight</Link>
      </li>
    </ul>
  </nav>
);

export default Navigation;
