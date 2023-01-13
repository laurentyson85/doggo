import React from "react";

function ReviewCard({rating, comment}) {

  return (
    <p className="reviewCard">
      {/* <p><span style={{fontWeight: "bold"}}>Title:</span> {title}</p> */}
      <span>~ Rating: {rating} - </span>
      <span>"{comment}"</span>
      <br></br>
    </p>
    
  )
}

export default ReviewCard;