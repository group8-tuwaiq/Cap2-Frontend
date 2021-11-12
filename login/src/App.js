import logo from './logo.svg';
import './App.css';
import React from 'react';
import {FormControl,FormGroup,Form,Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="main">
    <div className="login">
   <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
     please enter your email 
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me " />
  </Form.Group>
  <Button  variant="outline-secondary" type="submit">
    Login
  </Button>
</Form>





    </div>
    </div>
  );
}

export default App;
