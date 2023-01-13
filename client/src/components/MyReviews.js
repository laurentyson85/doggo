import React, { useState, useEffect } from "react";
import MyReviewsCard from "./MyReviewsCard";

function MyReviews( {} ) {
  const [reviews, setMyReviews] = useState([]) 

  useEffect(() => {
    fetch('/reviews')
    .then(response => response.json())
    .then(data => {
      setMyReviews(data)
    })
  }, [])  

  function handleDeleteReview(id){
    const updatedReviews = reviews.filter((review) => review.id !== id)
    setMyReviews(updatedReviews)
  }

  function handleUpdateReview(updatedReview) {
    const updatedReviews = reviews.map((review) => {
      return review.id === updatedReview.id ? updatedReview : review;
    });
    setMyReviews(updatedReviews);
  }

  const myReviews = reviews.map(review => {
    return(
        <MyReviewsCard
        key={review.id}
        id={review.id}
        reviewRating={review.rating}
        reviewComment={review.comment}
        dogWalkerName={review.dog_walker.name}
        onDeleteReview={handleDeleteReview}
        onUpdateReview={handleUpdateReview}
        />
    )
})
    return (
      <div className="myReviewListings">
        {reviews.length > 0 ?
          <>
            {myReviews}
          </>            
          :
            <>
              <p>No reviews yet! Head to View the Crew to select a dog walker and add a review</p>
            </>                
          }    
      </div>
    );
  }
  
  export default MyReviews;