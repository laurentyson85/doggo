import React, { useState } from "react";
import { useNavigate } from "react-router-dom"

function LoginForm({ onLogin }) {
    const navigate = useNavigate()
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState(""); 
    const [errors, setErrors] = useState([]);
    
    function handleSubmit(event) {
        event.preventDefault();

        fetch("/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, password }),
        }).then((response) => {
          if (response.ok) {
            response.json().then((user) => onLogin(user));
          } else {
            response.json().then((error) => setErrors(error.errors)); //I have notes about this in phase 4
          }
        });
        navigate("/walkers")
      }
      //might need to still set login data to "" after this post

    return (
        <div className="loginForm">
        <div className="text">Login to dogGo!</div>
        <form onSubmit={handleSubmit}>
          <label className="field">              
              <input type="text" id="username" placeholder="username..." autoComplete="off" value={username} onChange={(event) => setUsername(event.target.value)}/>
          </label>
          <label className="field">
              <input type="password" id="password" placeholder="password..."autoComplete="current-password" value={password} onChange={(event) => setPassword(event.target.value)} />
          </label>        
          <button className="submitButton" type="submit">Submit</button>
        </form>
        <br></br>
        {errors.map((error) => (
          <li key={error}>Error: {error}</li>
        ))}
      </div>
    );
  }
  
  export default LoginForm;