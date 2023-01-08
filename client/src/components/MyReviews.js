import React, { useState, useEffect } from "react";
import MyReviewsCard from "./MyReviewsCard";
import EditReviewForm from "./EditReviewForm";

function MyReviews( {} ) {
  const [reviews, setMyReviews] = useState([])
  const [showEditForm, setShowEditForm] = useState(false);
  const [editID, setEditID] = useState(false);

  console.log(reviews) //remember to remove this later

  useEffect(() => {
    fetch('/reviews')
    .then(response => response.json())
    .then(data => {
      setMyReviews(data)
    })
  }, [])

  function handleEditClick(event){
    setEditID(event.target.id)
    setShowEditForm(true)
  }

  function updateReviews(id){
    const updatedReviews = reviews.filter((review) => review.id !== id)
    setMyReviews(updatedReviews)
  } 

  const myReviews = reviews.map(review => {
    return(
        <MyReviewsCard
        key={review.id}
        id={review.id}
        rating={review.rating}
        comment={review.comment}
        dogWalkerName={review.dog_walker.name}
        handleEditClick={handleEditClick}
        onDeleteReview={updateReviews}
        />
    )
})

  //the return below needs to be a card + two forms that show when a button is clicked
    return (
      <div className="walkerForm">
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