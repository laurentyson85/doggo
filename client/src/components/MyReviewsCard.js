import React from "react";

function MyReviewsCard({rating, comment, setEditForm, setDeleteForm, dogWalkerName}) {

  return (
    <li className="myReviewsCard">
      <p><span style={{fontWeight: "bold"}}>Your Review of Dog Walker:</span> {dogWalkerName}</p>      
      <span>{rating}</span>
      <span>{comment}</span>
      <br></br>
      <button className="editButton" onClick={setEditForm}>Edit Review</button>
      <button className="deleteButton" onClick={setDeleteForm}>Delete Review</button>
    </li>    
  )
}

export default MyReviewsCard;