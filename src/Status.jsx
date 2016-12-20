import React from 'react';
import {
  ButtonGroup,
} from 'lucid-ui';

class Status extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}; // needs to load from service
  }
  onSelectHandler(selectedIndex) {
    this.setState({
      isAcceptingCalls: selectedIndex === 1
    }); // needs to synchronize to service
  }
  render() {
    return (
      <div style={{ paddingLeft: 20}}>
        <h1>ConNexus Status</h1>
        <ButtonGroup
        selectedIndices={this.state.isAcceptingCalls ? [1] : [0]}
        onSelect={(selectedIndex) => this.onSelectHandler(selectedIndex)}>
          <ButtonGroup.Button>I'm Busy</ButtonGroup.Button>
          <ButtonGroup.Button>Accepting Calls</ButtonGroup.Button>
        </ButtonGroup>
      </div>
    );
  }
}

export default Status;
