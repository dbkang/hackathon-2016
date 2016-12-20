import React from 'react';
import {
  ButtonGroup,
  TextField,
  Button,
} from 'lucid-ui';
import { hashHistory } from 'react-router';
import request from 'browser-request';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div style={{ paddingLeft: 20}}>
        <h1>Login to Connexus</h1>
        <div>
          <label style={{ display:'inline-block', width: 90}}>Username:</label>
          <input type="text" className={'lucid-TextField lucid-TextField-is-single-line'}
          style={{margin: 10, width: 200}}
          onChange={(e) => this.setState({username: e.target.value})}
          ></input>
        </div>
        <div>
          <label style={{ display:'inline-block', width: 90}}>Password:</label>
          <input type="password" className={'lucid-TextField lucid-TextField-is-single-line'}
          style={{margin: 10, width: 200}}
          onChange={(e) => this.setState({password: e.target.value})}
          ></input>
        </div>
        <Button kind='primary'
        onClick={() => {
          const state = this.state;
          request({
            method:'POST',
            url:'http://bryce.obviousdeception.com/hack/login/',
            body:JSON.stringify({ user: this.state }),
            json:true
          }, function(er, response, body) {
            if (er) {
              throw er;
            } else {
              hashHistory.push('/status/' + body.user.id + '/' + state.username);
            }
          });
        }}>Login</Button>
      </div>
    );
  }
}

export default Login;
