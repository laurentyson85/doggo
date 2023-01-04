import React, { useState } from "react";

function LoginForm() {
    const [loginData, setLoginData] = useState({
        username: "",
        password: "",
    }) 
    const [errors, setErrors] = useState([]);
    const [loading, setLoading] = useState(false); //eh, may not use this

    function handleForm(event){
        setLoginData({
          ...loginData, [event.target.name]:event.target.value
        })
      }

    function handleSubmit(event) {
        event.preventDefault();
        setLoading(true);

        fetch("/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            "username": loginData.username,
            "password": loginData.password,
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
      //might need to still set login data to "" after this post

    return (
        <div className="loginForm">
        <form onSubmit={handleSubmit}>
          <label>
              Username
              <input type="text" id="username" autoComplete="off" value={loginData.username} onChange={handleForm}/>
          </label>
          <label>
              Password
              <input type="password" id="password" autoComplete="current-password" value={loginData.password} onChange={handleForm} />
          </label>        
          <button type="submit">Submit</button>
          {/* {loading ? "Loading..." : "Login"} */}
        </form>
        {/* {errors.map((err) => (
          <Error key={err}>{err}</Error>
        ))} */}
        {/* for errors looks in notes there was a better way to display this */}
      </div>
    );
  }
  
  export default LoginForm;