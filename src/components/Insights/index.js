import React from "react";
import Container from "../general/Container";
import Navigation from "../general/Navigation";
import Panel from "../general/Panel";
import Header3 from "../general/Header3";
import InsightRow from "./InsightRow";
import InsightTotal from "./InsightTotal";

export default class Insights extends React.Component {
  state = {
    loading: false,
    insights: []
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    this.setState({ loading: true });
    return fetch("/api/insights/")
      .then(response => response.json())
      .then(response => this.setState({ loading: false, insights: response }));
  }

  render() {
    const { loading, insights } = this.state;
    return (
      <Container>
        <Navigation />

        <Panel>
          {loading ? (
            <p className="loading">Loading...</p>
          ) : (
            <InsightTotal insights={insights} />
          )}
        </Panel>

        <Header3>Your previous entries:</Header3>

        {loading ? (
          <p className="loading">Loading...</p>
        ) : (
          insights.map((insight, index) => (
            <InsightRow key={index} insight={insight} />
          ))
        )}
      </Container>
    );
  }
}
