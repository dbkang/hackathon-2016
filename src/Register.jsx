import React from 'react';
import {
  TextField,
  Panel,
  CheckboxLabeled,
  Dialog,
  Button,
  SingleSelect,
  LoadingIcon,
} from 'lucid-ui';

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
      <div style={{ padding: 20 }}>
        <h1 style={{ marginBottom: 20 }}>Register as a Volunteer for Call Me Maybe</h1>
        <div>
          Name
          <TextField style={{ marginLeft: 15, marginBottom: 15, width: 300}}
          onChange={(name) => this.setState({name})}></TextField>
        </div>
        <div>
          Email
          <TextField style={{ marginLeft: 15, marginBottom: 15, width: 300}}
          onChange={(email) => this.setState({email})}></TextField>
        </div>
        <div>
          Phone number
          <TextField style={{ marginLeft: 15, marginBottom: 15, width: 300}}
          onChange={(phone) => this.setState({phone})}></TextField>
        </div>
        <div>
          <span>Expertise</span>
          {
            this.categories.map(({name, description}) => (
              <CheckboxLabeled
              isSelected={this.state['expertise:' + name]}
              onSelect={(isSelected) => this.setState({['expertise:'+ name]: isSelected})}>
                <CheckboxLabeled.Label>{description}</CheckboxLabeled.Label>
              </CheckboxLabeled>
            ))
          }
        </div>
        <Button kind='primary'>Save</Button>
        {JSON.stringify(this.state)}
      </div>
    )
  }
};

export default Register;
