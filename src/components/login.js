import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const navigate = useNavigate();

  const login = (e) => {
    e.preventDefault()
    axios
      .post("http://localhost:4000/movies/login", {
        email: email,
        password: password,
      })
      .then((response) => {
          console.log(response);
        if (response.data == true) {
            console.log('its true');
            navigate("/home");
        }
        
        if(response.data== false){
            console.log('false body');
        //   alert("false");
          navigate("/login");
        }
      });
  };

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
