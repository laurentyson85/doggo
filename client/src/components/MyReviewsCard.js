import React from "react";

function MyReviewsCard({rating, comment, setEditForm, setDeleteForm}) {

  return (
    <li className="myReviewsCard">      
      <span>{rating}</span>
      <span>{comment}</span>
      <br></br>
      <button className="editButton" onClick={setEditForm}>Edit Review</button>
      <button className="deleteButton" onClick={setDeleteForm}>Delete Review</button>
    </li>    
  )
}

export default MyReviewsCard;