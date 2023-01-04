import React, { useState } from "react";

function SignUpForm({ onLogin }) {
    const [signupData, setSignupData] = useState({
        username: "",
        password: "",
        passwordConfirmation: "",
    }) 
    const [errors, setErrors] = useState([]);
    const [loading, setLoading] = useState(false); //eh, may not use this

    function handleForm(event){
        setSignupData({
          ...signupData, [event.target.name]:event.target.value
        })
      }

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
            "username": signupData.username,
            "password": signupData.password,
            "password_confirmation": signupData.passwordConfirmation,
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
        <form onSubmit={handleSubmit}>
          <label>
              Username
              <input type="text" id="username" autoComplete="off" value={signupData.username} onChange={handleForm}/>
          </label>
          <label>
              Password
              <input type="password" id="password" autoComplete="current-password" value={signupData.password} onChange={handleForm} />
          </label>
          <label>
              Confirm Password
              <input type="password" id="password_confirmation" autoComplete="current-password" value={signupData.passwordConfirmation} onChange={handleForm} />
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