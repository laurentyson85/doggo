import React from "react";

function ReviewCard({rating, comment}) {

  return (
    <p className="reviewCard">
      <span>~ Rating: {rating} - </span>
      <span>"{comment}"</span>
      <br></br>
    </p>
    
  )
}

export default ReviewCard;