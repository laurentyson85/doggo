//state might need to be default set to existing review

import React, { useState } from "react";

function EditReviewForm({ id, reviewRating, reviewComment, onUpdateReview, handleEditClick }) {
    const [rating, setRating] = useState(reviewRating);
    const [comment, setComment] = useState(reviewComment);    
    const [errors, setErrors] = useState([]); 
    const [isLoading, setIsLoading] = useState(false)

    function handleSubmit(event) {
        event.preventDefault();
        setErrors([]);
        setIsLoading(true)

        fetch(`reviews/${id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            rating: rating,
            comment: comment,
          }),
        }).then((response) => {          
          setRating("")
          setComment("")
          setIsLoading(false)
          handleEditClick()         
          if (response.ok) {
            response.json().then((data) => onUpdateReview(data));            
          } else {
            response.json().then((error) => setErrors(error.errors));
          }
        });
      }

      return (
        <div className="reviewForm">
        <div className="text">Update your review</div>  
        <form onSubmit={handleSubmit}>
          <label className="field">
              <input type="text" id="rating" autoComplete="off" value={rating} onChange={(event) => setRating(event.target.value)}/>
          </label>
          <label className="field">
              <input type="text" id="comment"  autoComplete="off" value={comment} onChange={(event) => setComment(event.target.value)} />
          </label>
          <button className="submitButton" type="submit">{isLoading ? "Loading..." : "Submit"}</button>          
        </form>
        <br></br>
        {errors.map((error) => (
          <li className="error" key={error}>Error: {error}</li>
        ))}
      </div>
    );
  }
  
  export default EditReviewForm;