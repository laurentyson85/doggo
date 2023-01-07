import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Nav from './Nav';
import MyReviews from './MyReviews';
import WalkerForm from './WalkerForm';
import Walkers from './Walkers';
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

    console.log(user) //make sure to remove this later
  
    if (user) {
      return (
        <div>
            <Header />
            <Nav setUser={setUser} />
            <Routes>        
                <Route 
                    path="reviews" 
                    element={<MyReviews/>}/>                    
                <Route 
                    path="new" 
                    element={<WalkerForm/>}
                    />
                <Route 
                    path="walkers" 
                    element={<Walkers />}/>
                    {/* <Route 
                        path="jobs/:id" 
                        element={<JobDetails allJobs={allJobs} allHipsters={allHipsters} updateAllHipsters={updateAllHipsters} updateAllJobs={updateAllJobs} />}
                    />             */}
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