import React, { useState } from "react";

function SignUpForm({ onLogin }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [errors, setErrors] = useState([]); 
    

    function handleSubmit(event) {
        event.preventDefault();
        setErrors([]);

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
          if (response.ok) {
            response.json().then((user) => onLogin(user));
          } else {
            response.json().then((error) => setErrors(error.errors)); //I have notes about this in phase 4
          }
        });
      }
      //might need to still set signup data to "" after this post

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
          <button className="submitButton" type="submit">Submit</button>          
        </form>
        {/* {errors.map((err) => (
          <Error key={err}>{err}</Error>
        ))} */}
        {/* for errors looks in notes there was a better way to display this */}
      </div>
    );
  }
  
  export default SignUpForm;