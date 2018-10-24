import React from "react";
import Container from "../general/Container";
import Navigation from "../general/Navigation";
import MoodStep from "./MoodStep";
import FeelingsStep from "./FeelingsStep";
import CommentStep from "./CommentStep";
import DoneStep from "./DoneStep";

export default class Survey extends React.Component {
  state = {
    step: 0,
    data: {
      mood: 4,
      feelings: [],
      comment: ""
    }
  };

  setData = (key, value) => {
    this.setState(state => ({
      data: { ...state.data, [key]: value }
    }));
  };

  setComment = e => this.setData("comment", e.currentTarget.value);
  setMood = e => this.setData("mood", Number(e.currentTarget.value));

  setFeelings = e => {
    const { name, checked } = e.currentTarget;

    if (checked) {
      this.setData("feelings", [...this.state.data.feelings, name]);
    } else {
      this.setData(
        "feelings",
        this.state.data.feelings.filter(f => f !== name)
      );
    }
  };

  nextStep = () => this.setState(state => ({ step: state.step + 1 }));
  prevStep = () => this.setState(state => ({ step: state.step - 1 }));

  submission = () => {
    fetch("/api/insights/", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state.data)
    }).then(response => this.nextStep());
  };

  render() {
    const { step, data } = this.state;
    return (
      <Container>
        <Navigation />
        {step === 0 && (
          <MoodStep
            value={data.mood}
            onNext={this.nextStep}
            onChange={this.setMood}
          />
        )}
        {step === 1 && (
          <FeelingsStep
            feelings={data.feelings}
            onNext={this.nextStep}
            onBack={this.prevStep}
            onChange={this.setFeelings}
          />
        )}
        {step === 2 && (
          <CommentStep
            value={data.comment}
            onBack={this.prevStep}
            onNext={this.submission}
            onChange={this.setComment}
          />
        )}
        {step === 3 && <DoneStep />}
      </Container>
    );
  }
}
