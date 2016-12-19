import React from 'react';
import {
  ButtonGroup,
} from 'lucid-ui';

class Status extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    self = this;
  }
  onSelectHandler(selectedIndex) {
    this.setState({
      isAcceptingCalls: selectedIndex === 1
    });
  }
  render() {
    return (
      <ButtonGroup
      selectedIndices={this.state.isAcceptingCalls ? [1] : [0]}
      onSelect={(selectedIndex) => this.onSelectHandler(selectedIndex)}>
        <ButtonGroup.Button>I'm Busy</ButtonGroup.Button>
        <ButtonGroup.Button>Accepting Calls</ButtonGroup.Button>
      </ButtonGroup>
    );
  }
}

export default Status;
