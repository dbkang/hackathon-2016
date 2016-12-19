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
import './css/index.css';

const Welcome = ({
  
}) => (
  <div style={{ padding: 20 }}>
  <h1 style={{ marginBottom: 20 }}>Welcome! Register for AppNexus Hotline</h1>
  <div>
    Name
  <TextField style={{ marginLeft: 15, marginBottom: 15, width: 300}}> Words </TextField>
  </div>
  
  <div>
    Email
  <TextField style={{ marginLeft: 15, marginBottom: 15, width: 300}}> Words </TextField>
  </div>
  
  <div>
    Phone number
  <TextField style={{ marginLeft: 15, marginBottom: 15, width: 300}}> Words </TextField>
  </div>
  
  <div>
    Expertise
  <CheckboxLabeled>
  <CheckboxLabeled.Label> I can sing holiday songs :)</CheckboxLabeled.Label>
</CheckboxLabeled>

<CheckboxLabeled>
<CheckboxLabeled.Label> I can troubleshoot Console issues</CheckboxLabeled.Label>
</CheckboxLabeled>

<CheckboxLabeled>
<CheckboxLabeled.Label> I can coach someone through a challenging work situation</CheckboxLabeled.Label>
</CheckboxLabeled>

</div>

<Button kind='primary'>Save</Button>

</div>
);

export default Welcome;
