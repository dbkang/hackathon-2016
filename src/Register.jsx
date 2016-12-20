import React from 'react';
import {
  TextField,
  CheckboxLabeled,
  Button,
} from 'lucid-ui';
import { hashHistory } from 'react-router';
import request from 'browser-request';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      phone: '',
      password: '',
    };
    this.categories = [
      {
        name: "is_song",
        description: "Singing"
      },
      {
        name: "is_mentoring",
        description: "Mentoring"
      },
      {
        name: "is_console",
        description: "Listening"
      },
      {
        name: "juggling",
        description: "Juggling"
      },
    ];
  }
  render() {
    return (
      <div style={{ paddingLeft: 20}}>
        <h1 style={{ marginBottom: 20 }}>Sign Up for Connexus</h1>
        <div>
          <label style={{ display:'inline-block', width: 150}}>Username:</label>
          <TextField style={{ margin: 10, width: 300}}
          onChange={(username) => this.setState({username})}></TextField>
        </div>
        <div>
          <label style={{ display:'inline-block', width: 150}}>Email:</label>
          <TextField style={{ margin: 10, width: 300}}
          onChange={(email) => this.setState({email})}></TextField>
        </div>
        <div>
          <label style={{ display:'inline-block', width: 150}}>Password:</label>
          <input type="password" className={'lucid-TextField lucid-TextField-is-single-line'}
          style={{margin: 10, width: 300}}
          onChange={(e) => this.setState({password: e.target.value})}
          ></input>
        </div>
        <div>
          <span style={{ display:'inline-block', width: 150}}>Phone Number:</span>
          <TextField style={{ margin: 10, width: 300}}
          onChange={(phone) => this.setState({phone})}></TextField>
        </div>
        <div>
          <h3>Sign me up for:</h3>
          {
            this.categories.map(({name, description}) => (
              <CheckboxLabeled
              style={{ marginTop: 10 }}
              isSelected={this.state[name]}
              onSelect={(isSelected) => this.setState({[name]: isSelected})}>
                <CheckboxLabeled.Label>{description}</CheckboxLabeled.Label>
              </CheckboxLabeled>
            ))
          }
        </div>
        <Button kind='primary' style={{ marginTop: 10}}
        onClick={() => {
          request({
            method:'POST',
            url:'http://bryce.obviousdeception.com/hack/user/',
            body:JSON.stringify({ user: this.state }),
            json:true
          }, function(er, response, body) {
            if (er) {
              throw er;
            } else {
              hashHistory.push('/status/' + body.user.id + '/' + body.user.username);
            }
          });
        }}
        >Sign Up</Button>
        <div style={{display: 'none'}}>{JSON.stringify(this.state)}</div>
      </div>
    )
  }
};

export default Register;
