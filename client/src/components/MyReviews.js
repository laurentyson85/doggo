import React, { useState } from "react";
import MyReviewsCard from "./MyReviewsCard";

function MyReviews( {user} ) {
  const[reviews, setMyReviews] = useState(user.reviews)
  console.log(reviews)

  console.log(user) //remember to remove this later

  //it will be easier just to get my reviews and associated dog walker



  const myReviews = reviews.map(review => {
    return(
        <MyReviewsCard
        key={review.id}
        id={review.id}
        rating={review.rating}
        comment={review.comment}
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
              <p>No reviews yet! head to View the Crew to select a dog walker and add a review</p>
            </>                
          }    
        
      </div>
    );
  }
  
  export default MyReviews;