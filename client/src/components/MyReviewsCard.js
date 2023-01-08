import React, { useState } from "react";
import EditReviewForm from "./EditReviewForm";


function MyReviewsCard({id, reviewRating, reviewComment, dogWalkerName, onDeleteReview, onUpdateReview}) {

  const [showEditForm, setShowEditForm] = useState(false);

  function handleEditClick(){
    setShowEditForm(!showEditForm)
  }

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
      <span>{reviewRating}</span>
      <span>{reviewComment}</span>
      <br></br>
      <button className="editButton" onClick={handleEditClick}>{showEditForm ? "Hide Edit Form" : "Edit Review"}</button>
      <button className="deleteButton" onClick={handleDeleteClick}>Delete Review</button>
      <br></br>
          {showEditForm ? <EditReviewForm id={id} reviewRating={reviewRating} reviewComment={reviewComment} onUpdateReview={onUpdateReview} handleEditClick={handleEditClick} /> : null}                   
    </li>    
  )
}

export default MyReviewsCard;