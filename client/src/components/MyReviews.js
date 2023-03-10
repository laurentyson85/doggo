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
  
  console.log(reviews)

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

//   const myReviews = reviews.map(review => {
//     return(
//         <MyReviewsCard
//         key={review.id}
//         id={review.id}
//         reviewRating={review.rating}
//         reviewComment={review.comment}
//         dogWalkerName={review.dog_walker.name}
//         onDeleteReview={handleDeleteReview}
//         onUpdateReview={handleUpdateReview}
//         />
//     )
// })
    return (
      <div className="myReviewListings">
        <h2 className="reviewHeading">To add a review, head over to View the Crew!</h2>
        <br></br>
        {/* {myReviews} */}
        HI
      </div>
    );
  }
  
  export default MyReviews;