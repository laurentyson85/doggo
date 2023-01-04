import React, { useState } from "react";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";

function Home({ onLogin }) { //these props are being passed down from App
    const [toggleForm, setToggleForm] = useState(true);

    return(
        <div>        
        {toggleForm ? (
            <>
              <LoginForm onLogin={onLogin} />              
              <p>
                Don't have an account? &nbsp;
                <button onClick={() => setToggleForm(false)}>Sign Up</button>
              </p>
            </>
          ) : (
            <>
              <SignUpForm onLogin={onLogin} />
              <p>
                Already have an account? &nbsp;
                <button onClick={() => setToggleForm(true)}>Log In</button>
              </p>
            </>
          )}
          </div>
        );        
    }

    export default Home;