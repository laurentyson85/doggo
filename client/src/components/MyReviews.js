import React, { useState, useEffect } from "react";
import MyReviewsCard from "./MyReviewsCard";

function MyReviews( {} ) {
  const[reviews, setMyReviews] = useState([])

  console.log(reviews) //remember to remove this later

  useEffect(() => {
    fetch('/reviews')
    .then(response => response.json())
    .then(data => {
      setMyReviews(data)
    })
  }, [])

  



//   const myReviews = reviews.map(review => {
//     return(
//         <MyReviewsCard
//         key={review.id}
//         id={review.id}
//         rating={review.rating}
//         comment={review.comment}
//         />
//     )
// })

  //the return below needs to be a card + two forms that show when a button is clicked
    return (
      <div className="walkerForm">
        {/* {reviews.length > 0 ?
          <>
            {myReviews}
          </>            
          :
            <>
              <p>No reviews yet! head to View the Crew to select a dog walker and add a review</p>
            </>                
          }     */}
        testing
      </div>
    );
  }
  
  export default MyReviews;