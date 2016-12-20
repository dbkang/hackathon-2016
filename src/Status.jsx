import React from 'react';
import {
  ButtonGroup,
} from 'lucid-ui';
import request from 'browser-request';

class Status extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    const self = this;
    request({
      method:'GET',
      url:'http://bryce.obviousdeception.com/hack/singerstatus/?id=' + props.params.id,
      json:true
    }, function(er, response, body) {
      if (er) {
        throw er;
      } else {
        self.setState({isAcceptingCalls : body.user.avail_status })
      }
    });
  }
  onSelectHandler(selectedIndex) {
    const { id, username } = this.props.params;
    const avail_status = selectedIndex === 1;
    this.setState({
      isAcceptingCalls: avail_status
    });
    request({
      method:'POST',
      url:'http://bryce.obviousdeception.com/hack/singerstatus/',
      body:JSON.stringify({ user: { id, username, avail_status } }),
      json:true
    }, function(er, response, body) {
      if (er) {
        throw er;
      }
    });
  }
  render() {
    return (
      <div style={{ paddingLeft: 20}}>
        <h1>Connexus Status for {this.props.params.username}</h1>
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
