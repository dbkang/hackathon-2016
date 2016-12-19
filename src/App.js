import React, { Component } from 'react';
import { Router, Route, Link, hashHistory, IndexRedirect } from 'react-router';
import Register from './Register.jsx';
import Status from './Status.jsx';
import Login from './Login.jsx';
import './css/index.css';

class App extends Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path="/">
          <IndexRedirect to='register'/>
          <Route path="status" component={Status}/>
          <Route path="register" component={Register}/>
          <Route path="login" component={Login}/>
        </Route>
      </Router>
    );
  }
}

export default App;
