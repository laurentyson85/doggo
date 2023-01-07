import React from "react";

function ReviewCard({rating, comment}) {

  return (
    <li className="reviewCard">
      {/* <p><span style={{fontWeight: "bold"}}>Title:</span> {title}</p> */}
      <span>{rating}</span>
      <span>{comment}</span>
      <br></br>
    </li>
    
  )
}

export default ReviewCard;