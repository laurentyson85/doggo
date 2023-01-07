import React, { useState, useEffect } from 'react';

function Walkers() {
    const [allWalkers, setAllWalkers] = useState([])

    useEffect(() => {
        fetch("/dog_walkers")
        .then(response => response.json())
        .then(data => {
            setAllWalkers(data)
        })
      }, [])
      
      console.log(allWalkers)


    return (
      <div className="allWalkers">        
        All Dog Walkers
      </div>
    );
  }
  
  export default Walkers;