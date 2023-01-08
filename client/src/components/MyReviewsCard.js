import React from "react";

function MyReviewsCard({id, rating, comment, handleEditClick, handleDeleteClick, dogWalkerName, onDeleteReview}) {

  function handleDeleteClick(){
    fetch(`reviews/${id}`,{
      method: "DELETE",
    }).then((response) => {
      if (response.ok) {        
        onDeleteReview(id)
      }
    });
  }

 

  return (
    <li className="myReviewsCard">
      <p><span style={{fontWeight: "bold"}}>Your Review of Dog Walker:</span> {dogWalkerName}</p>      
      <span>{rating}</span>
      <span>{comment}</span>
      <br></br>
      <button className="editButton" onClick={handleEditClick}>Edit Review</button>
      <button className="deleteButton" onClick={handleDeleteClick}>Delete Review</button>
    </li>    
  )
}

export default MyReviewsCard;