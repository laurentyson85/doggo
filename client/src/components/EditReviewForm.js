//state might need to be default set to existing review

import React, { useState } from "react";

function EditReviewForm({ editID, addNewReview }) {
    const [rating, setRating] = useState("");
    const [comment, setComment] = useState("");    
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false)

    function handleSubmit(event) {
        event.preventDefault();
        setErrors([]);
        setIsLoading(true)

        fetch(`reviews/${editID}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            rating,
            comment,
          }),
        }).then((response) => {          
          setRating("")
          setComment("")
          setIsLoading(false)
          console.log(isLoading)          
          if (response.ok) {
            response.json().then((data) => addNewReview(data));            
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
              <input type="text" id="rating" placeholder="update your rating 1 - 5..." autoComplete="off" value={rating} onChange={(event) => setRating(event.target.value)}/>
          </label>
          <label className="field">
              <input type="text" id="comment" placeholder="update your comment..." autoComplete="off" value={comment} onChange={(event) => setComment(event.target.value)} />
          </label>
          <button className="submitButton" type="submit">{isLoading ? "Loading..." : "Submit"}</button>          
        </form>
        <br></br>
        {errors.map((error) => (
          <li key={error}>Error: {error}</li>
        ))}
      </div>
    );
  }
  
  export default EditReviewForm;