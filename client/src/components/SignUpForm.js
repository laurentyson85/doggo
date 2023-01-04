import React, { useState } from "react";

function SignUpForm() {





    
    return (
        <div className="createHipster">
        <h2>Join us!</h2>
        <form onSubmit={handleSubmit}>
          <label>
              What's your name, hipster?
              <input type="text" name="name" value={newHipsterData.name} onChange={handleForm}/>
          </label>
          <label>
              Add your bio:
              <input type="text" name="bio" value={newHipsterData.bio} onChange={handleForm} />
          </label>        
          <button type="submit">Submit - let's find you a job!</button>
        </form>
      </div>
    );
  }
  
  export default SignUpForm;