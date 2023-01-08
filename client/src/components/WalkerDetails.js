import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom"
import ReviewForm from './ReviewForm';
import ReviewCard from './ReviewCard';

function WalkerDetails({}) {
    const [walker, setWalker] = useState([])
    const [walkerReviews, setWalkerReviews] = useState([])
    const [showForm, setShowForm] = useState(false);

    const { id } = useParams()

    useEffect(() => {
        fetch(`/dog_walkers/${id}`)
        .then(response => response.json())
        .then(data => {
            setWalker(data)
            setWalkerReviews(data.reviews)
        })
      }, [])
      
      console.log(walker) //remove this console.log later
      console.log(walkerReviews) //remove this console.log later

      function addNewReview(newReview){  
        const updatedReviews = [...walkerReviews, newReview]
        setWalkerReviews(updatedReviews)
        setShowForm(false)
      }

      const displayReviews = walkerReviews.map(review => {
        return(
          <ReviewCard
            key={review.id}
            rating={review.rating}
            comment={review.comment}
          />
        )
    })     

    return (
        <div className="walkerDetails">                   
          <img src={walker.image_url} alt="image_url" />
          <p><span style={{fontWeight: "bold"}}>Name: </span> {walker.name}</p>
          <p>I love all dogs, but my personal favorite is the {walker.favorite_dog_breed}. Contact me at {walker.phone} to schedule a walk!</p>          
          <br></br>
          {walkerReviews.length > 0 ?
          <>
            {displayReviews}
          </>            
          :
            <>
              <p>No reviews yet! Add one</p>
            </>                
          }
          <br></br>
          <button className="addReviewButton" onClick={() => setShowForm(!showForm)}>Add a Review</button>
          <br></br>
          {showForm ? <ReviewForm walkerID={walker.id} addNewReview={addNewReview} /> : null}                   
       </div>      
    )
  }
  
  export default WalkerDetails;