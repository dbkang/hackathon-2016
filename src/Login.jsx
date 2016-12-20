import React from 'react';
import {
  ButtonGroup,
  TextField,
  Button,
} from 'lucid-ui';
import { hashHistory } from 'react-router'

class Login extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div style={{ paddingLeft: 20}}>
        <h1>Login to Connexus</h1>
        <div>
          <span>Username: </span>
          <input type="text" className={'lucid-TextField lucid-TextField-is-single-line'}
          style={{margin: 10, width: 200}}></input>
        </div>
        <div>
          <span>Password: </span>
          <input type="password" className={'lucid-TextField lucid-TextField-is-single-line'}
          style={{margin: 10, width: 200}}></input>
        </div>
        <Button kind='primary'
        onClick={() => hashHistory.push('/status')}
        >Login</Button>
      </div>
    );
  }
}

export default Login;
