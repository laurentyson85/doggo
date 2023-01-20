import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Nav from './Nav';
import MyReviews from './MyReviews';
import WalkerForm from './WalkerForm';
import Walkers from './Walkers';
import WalkerDetails from './WalkerDetails';
import "../App.css"

//if I end up rescheduling this, do a different route to get users dog walkers. then everytime you go to that page the fetch will rerun

//add a new client side route for the users dog walkers. Structure similar to my reviews

function App() {
    const [user, setUser] = useState(null);
  
    useEffect(() => {
      fetch("/me").then((response) => {
        if (response.ok) {
          response.json().then(() => setUser(user));
        }
      });
    }, []);

   
    if (user) {
      return (
        <div>
            <Header />
            <Nav setUser={setUser} />
            <Routes>        
                <Route 
                    path="reviews" 
                    element={<MyReviews />}/>                
                <Route 
                    path="new" 
                    element={<WalkerForm/>}
                    />
                <Route 
                    path="walkers" 
                    element={<Walkers />}/>
                    <Route 
                        path="walkers/:id" 
                        element={<WalkerDetails />}
                    />            
            </Routes>         

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