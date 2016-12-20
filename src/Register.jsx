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
      name: '',
      email: '',
      phone: '',
    };
    this.categories = [
      {
        name: "is_song",
        description: "Singing"
      },
      {
        name: "mentoring",
        description: "Mentoring"
      },
      {
        name: "listening",
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
          onChange={(name) => this.setState({name})}></TextField>
        </div>
        <div>
          <span style={{ display:'inline-block', width: 150}}>Email:</span>
          <TextField style={{ margin: 10, width: 300}}
          onChange={(email) => this.setState({email})}></TextField>
        </div>
        <div>
          <span style={{ display:'inline-block', width: 150}}>Password:</span>
          <input type="password" className={'lucid-TextField lucid-TextField-is-single-line'}
          style={{margin: 10, width: 300}}></input>
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
              isSelected={this.state['expertise:' + name]}
              onSelect={(isSelected) => this.setState({['expertise:'+ name]: isSelected})}>
                <CheckboxLabeled.Label>{description}</CheckboxLabeled.Label>
              </CheckboxLabeled>
            ))
          }
        </div>
        <Button kind='primary' style={{ marginTop: 10}}
        onClick={() => {
          //request({method:'POST', url:'http://bryce.obviousdeception.com/hack/user/', body:'{"relaxed":true}', json:true}, function(er, response, body) {
          //  if(er)
          //    throw er;
          //  console.log("I got: " + body);
          //});
          hashHistory.push('/status');

        }}
        >Sign Up</Button>
        <div style={{display: 'none'}}>{JSON.stringify(this.state)}</div>
      </div>
    )
  }
};

export default Register;
