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
      
      console.log(walker) //remove this console.log later

      //need to display dog walker and reviews. If no reviews display language to click button to add
      //add button and simple form to create a review
      //make post request
      //after post, think about how I will update this state to show newly created review

    return (
        <div className="walkerDetails">                   
          <img src={walker.image_url} alt="image_url" />
          <p><span style={{fontWeight: "bold"}}>Name: </span> {walker.name}</p>
          <p>I love all dogs, but my personal favorite is a {walker.favorite_dog_breed}. Contact me at {walker.phone} to schedule a walk!</p>
          {/* {expired ?
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