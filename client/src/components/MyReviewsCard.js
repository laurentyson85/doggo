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
    <>
    <div className="myReviewsCard">
      <p><span style={{fontWeight: "bold"}}>Your Review of Dog Walker:</span> {dogWalkerName}</p>      
      <span>Rating: {reviewRating} - </span>
      <span>"{reviewComment}"</span>
      <br></br>
      <p>✅</p>
      <button className="myButton" onClick={handleEditClick}>{showEditForm ? "Hide Edit Form" : "Edit Review"}</button>
      <button className="myButton" onClick={handleDeleteClick}>Delete Review</button>
      </div>
    {showEditForm ? <EditReviewForm id={id} reviewRating={reviewRating} reviewComment={reviewComment} onUpdateReview={onUpdateReview} handleEditClick={handleEditClick} /> : null}
    <br></br>
    </>                       
  )
}

export default MyReviewsCard;