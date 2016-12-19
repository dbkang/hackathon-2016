import React, { Component } from 'react';
import { Router, Route, Link, hashHistory, IndexRedirect } from 'react-router';
import Welcome from './Welcome.jsx';
import './css/index.css';
import Status from './Status.jsx';

class App extends Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path="/">
          <IndexRedirect to='register'/>
          <Route path="status" component={Status}/>
          <Route path="register" component={Welcome}/>
        </Route>
      </Router>
    );
  }
}

export default App;
