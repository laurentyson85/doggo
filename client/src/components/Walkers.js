import React, { useState, useEffect } from 'react';

function Walkers() {
    const [allWalkers, setAllWalkers] = useState([])

    useEffect(() => {
        fetch("/dog_walkers")
        .then(response => response.json())
        .then(data => {
          console.log(data)
        })
      }, []) 


    return (
      <div className="walkerForm">        
        All Dog Walkers
      </div>
    );
  }
  
  export default Walkers;