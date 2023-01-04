import React, { useState, useEffect } from 'react';
import Header from './Header';
import Home from './Home';
import Nav from './Nav';
import "../App.css"

function App() {
    const [user, setUser] = useState(null);
  
    useEffect(() => {
      fetch("/me").then((response) => {
        if (response.ok) {
          response.json().then((user) => setUser(user));
        }
      });
    }, []);

    console.log(user)
  
    if (user) {
      return (
        <div>
            <Header />
            <Nav setUser={setUser} />

        </div>
        
      );
    } else {
      return (
        <div>
            <Header />
            <Home onLogin={setUser} />
        </div>      
      );
    }
  }

export default App;