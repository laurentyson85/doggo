import React, { useState, useEffect } from 'react';
import WalkerCard from './WalkerCard';

function Walkers() {
    const [allWalkers, setAllWalkers] = useState([])

    useEffect(() => {
        fetch("/dog_walkers")
        .then(response => response.json())
        .then(data => {
            setAllWalkers(data)
        })
      }, [])


      const dogWalkers = allWalkers.map(walker => {
        return(
            <WalkerCard
            key={walker.id}
            id={walker.id}
            name={walker.name}
            pic={walker.image_url}
            />
        )
    })
  
    return (
      <div>
        <ul className="listings">{dogWalkers}</ul>      
      </div>  
    )
  }
  
  export default Walkers;