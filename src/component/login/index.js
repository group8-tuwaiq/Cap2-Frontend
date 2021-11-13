import { Form, Button, Container } from "react-bootstrap";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [logResponse, setLogResponse] = useState("");

  const navigate = useNavigate();

  const login = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/login", {
        email: email,
        password: password,
      })
      .then((response) => {
        console.log(response);
        if (response.data.status == true) {
          console.log("its true");
          navigate("/home", { state: response.data.usrName });
        }

        if (response.data.status == false) {
          console.log("false body");
          setLogResponse(response.data.respLog);
          navigate("/login");
        }
      });
  };
  const goReg = () => {
    navigate("/register");
  }
  return (
    <Container>
      <h1 className="text-center p-5 bg-dark text-white">Login</h1>
      <form action="/login" method="POST">
        <Form.Group className="m-5" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" name="email" onChange={(e) => {
              setemail(e.target.value);
            }} />
        </Form.Group>

        <Form.Group className="mt-5 mx-5" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" name="password" onChange={(e) => {
              setpassword(e.target.value);
            }}/>
        </Form.Group>
        <Form.Group className="mx-5 mt-2" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Remeber me" />
        </Form.Group>
        <p>{logResponse}</p>

        <Button
          className="btn btn-dark m-5 px-4 py-2"
          onClick={login}
        >
          Login
        </Button>
        <Button type="button" className="m-0 px-4 py-2" variant="outline-dark" onClick={goReg}>
        Register
        </Button>
      </form>
    </Container>
  );
};

export default Login;
/*

const Login = () => {


  return (
    <div>
      <h1>Login</h1>]
      <form action="/login" method="POST">
        <div>
          <label for="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            onChange={(e) => {
              setemail(e.target.value);
            }}
          />
        </div>
        <div>
          <label for="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            required
            onChange={(e) => {
              setpassword(e.target.value);
            }}
          />
        </div>
        <button type="submit" onClick={login}>
          Login
        </button>
      </form>
      <Link to="/register">Register</Link>
    </div>
  );
};

export default Login;
*/
