import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom"

function WalkerDetails({}) {
    const [walker, setWalker] = useState([])
    const { id } = useParams()

    useEffect(() => {
        fetch(`/dog_walkers/${id}`)
        .then(response => response.json())
        .then(data => {
            setWalker(data)
        })
      }, [])
      
      console.log(walker)

    return (
        <div className="walkerDetails">                   
          <img src={walker.image_url} alt="image_url" />
          {/* <p><span style={{fontWeight: "bold"}}>Company slogan</span> {company_slogan}</p>
          <p>{company_name} is hiring a {title}. This {position} is skilled in: {key_skill}</p>
          <p><span style={{fontWeight: "bold"}}>Employment Type</span> {employment}</p>                           
          {expired ?
            <>
              <p>The position is expired.</p>
              <button className="expired" onClick={handleDeleteClick}>No longer on the market? Remove it</button>
            </>    
          :
            <>
              <p>Active job posting</p>
              <button className="open job" onClick={handleHireClick}>Hire a Hipster!</button>
            </>                
          } */}
       </div>      
    )
  }
  
  export default WalkerDetails;