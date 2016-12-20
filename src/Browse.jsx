import React from 'react';
import { Router, Route, Link, hashHistory, IndexRedirect } from 'react-router';
import {
  ButtonGroup,
} from 'lucid-ui';

class Browse extends React.Component {
  render() {
    return (
      <div style={{ paddingLeft: 20}}>
        <h1>Connexus</h1>
        <div>
          <p><Link to="/register">Sign Up</Link></p>
          <p><Link to="/login">Log In</Link></p>
        </div>
      </div>
    );
  }
}

export default Browse;
