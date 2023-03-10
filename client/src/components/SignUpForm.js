import React, { useState } from "react";
import { useNavigate } from "react-router-dom"

function SignUpForm({ onLogin }) {
    const navigate = useNavigate()
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false)

    

    function handleSubmit(event) {
        event.preventDefault();
        setErrors([]);
        setIsLoading(true)

        fetch("/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username,
            password,
            password_confirmation: passwordConfirmation,
          }),
        }).then((response) => {
          setIsLoading(false);
          if (response.ok) {
            response.json().then((user) => onLogin(user));
            navigate("/walkers")
          } else {
            response.json().then((error) => setErrors(error.errors));
          }
        });        
      }
     

      return (
        <div className="signupForm">
        <div className="text">Sign Up for dogGo!</div>  
        <form onSubmit={handleSubmit}>
          <label className="field">
              <input type="text" id="username" placeholder="username..." autoComplete="off" value={username} onChange={(event) => setUsername(event.target.value)}/>
          </label>
          <label className="field">
              <input type="password" id="password" placeholder="password..." autoComplete="current-password" value={password} onChange={(event) => setPassword(event.target.value)} />
          </label>
          <label className="field">
              <input type="password" id="password_confirmation" placeholder="confirm password..." autoComplete="current-password" value={passwordConfirmation} onChange={(event) => setPasswordConfirmation(event.target.value)} />
          </label>        
          <button className="submitButton" type="submit">{isLoading ? "Loading..." : "Submit"}</button>          
        </form>
        <br></br>
        {errors.map((error) => (
          <li className="error" key={error}>{error}</li>
        ))}
      </div>
    );
  }
  
  export default SignUpForm;