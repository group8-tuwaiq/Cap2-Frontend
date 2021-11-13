import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [usernameReg, setusernameReg] = useState("");
  const [emailReg, setEmailReg] = useState("");
  const [passwordReg, setpasswordReg] = useState("");
  const navigate = useNavigate();
//   const [currentUser, setcurrentUser] = useState("");

  const register = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/movies/register", {
        name: usernameReg,
        email: emailReg,
        password: passwordReg,
      })
      .then((response) => {
        console.log(response);
        if (response.data.status == true) {
        //   setcurrentUser(response.data.name);
          console.log("registered");
          navigate("/home", {state:response.data.name}); //lets assume home is homepage and pass currentUser
        }

        if (response.data.status == false) {
          navigate("/register");
        }
      });
  };

  return (
    <div>
      <h1>Register</h1>
      <form action="/movies/register" method="POST">
        <div>
          <label for="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            onChange={(e) => {
              setusernameReg(e.target.value);
            }}
          />
        </div>
        <div>
          <label for="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            onChange={(e) => {
              setEmailReg(e.target.value);
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
              setpasswordReg(e.target.value);
            }}
          />
        </div>
        <button type="submit" onClick={register}>
          Register
        </button>
      </form>
      <Link to="/login">Login</Link>
    </div>
  );
};

export default Register;
