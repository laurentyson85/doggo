import React, { useState } from "react";

function SignUpForm({ onLogin }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [errors, setErrors] = useState([]);
    const [loading, setLoading] = useState(false); //eh, may not use this
    

    function handleSubmit(event) {
        event.preventDefault();
        setErrors([]);
        setLoading(true);

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
          setLoading(false);
          if (response.ok) {
            response.json().then((user) => onLogin(user)); //onLogin needs to be passed as props from Home
          } else {
            response.json().then((error) => setErrors(error.errors)); //I have notes about this in phase 4
          }
        });
      }
      //might need to still set signup data to "" after this post

      return (
        <div className="signupForm">
        <div className="text">Sign Up Form</div>  
        <form onSubmit={handleSubmit}>
          <label className="field">
              Username
              <input type="text" id="username" autoComplete="off" value={username} onChange={(event) => setUsername(event.target.value)}/>
          </label>
          <label className="field">
              Password
              <input type="password" id="password" autoComplete="current-password" value={password} onChange={(event) => setPassword(event.target.value)} />
          </label>
          <label className="field">
              Confirm Password
              <input type="password" id="password_confirmation" autoComplete="current-password" value={passwordConfirmation} onChange={(event) => setPasswordConfirmation(event.target.value)} />
          </label>        
          <button type="submit">Submit</button>
          {/* {loading ? "Loading..." : "Sign Up"} */}
        </form>
        {/* {errors.map((err) => (
          <Error key={err}>{err}</Error>
        ))} */}
        {/* for errors looks in notes there was a better way to display this */}
      </div>
    );
  }
  
  export default SignUpForm;