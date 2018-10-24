import React from "react";
import Panel from "../../general/Panel";

export default class Accordion extends React.Component {
  state = {
    toggled: false
  };

  toggle = () =>
    this.setState(state => ({
      toggled: !state.toggled
    }));

  render() {
    return (
      <Panel>
        {this.props.children({
          onToggle: this.toggle,
          toggled: this.state.toggled
        })}
      </Panel>
    );
  }
}
