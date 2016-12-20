import React from 'react';
import {
  TextField,
  CheckboxLabeled,
  Button,
} from 'lucid-ui';
import { hashHistory } from 'react-router'

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
        name: "singing",
        description: "I can sing!"
      },
      {
        name: "console",
        description: "I can help with Console issues!"
      },
      {
        name: "workbuddy",
        description: "I can coach someone through a challenging work situation"
      },
    ];
  }
  render() {
    return (
      <div style={{ paddingLeft: 20}}>
        <h1 style={{ marginBottom: 20 }}>Sign Up for Connexus</h1>
        <div>
          <span>Name:</span>
          <TextField style={{ margin: 10, width: 300}}
          onChange={(name) => this.setState({name})}></TextField>
        </div>
        <div>
          <span>Email:</span>
          <TextField style={{ margin: 10, width: 300}}
          onChange={(email) => this.setState({email})}></TextField>
        </div>
        <div>
          <span>Password:</span>
          <input type="password" className={'lucid-TextField lucid-TextField-is-single-line'}
          style={{margin: 10, width: 300}}></input>
        </div>
        <div>
          <span>Phone Number:</span>
          <TextField style={{ margin: 10, width: 300}}
          onChange={(phone) => this.setState({phone})}></TextField>
        </div>
        <div>
          <span>Expertise</span>
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
        onClick={() => hashHistory.push('/status')}
        >Sign Up</Button>
        <div style={{display: 'none'}}>{JSON.stringify(this.state)}</div>
      </div>
    )
  }
};

export default Register;
