import React, { useState } from "react";
import { useNavigate } from "react-router-dom"

function ReviewForm({ walkerID }) {
    // const navigate = useNavigate()
    const [rating, setRating] = useState("");
    const [comment, setComment] = useState("");    
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false)

      //edit review form to be real
      //make post request
      //after post, think about how I will update this state to show newly created review

      console.log(walkerID)

    function handleSubmit(event) {
        event.preventDefault();
        setErrors([]);
        setIsLoading(true)

        fetch("/reviews", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            rating,
            comment,
            dog_walker_id: walkerID,
          }),
        }).then((response) => {
          setIsLoading(true);
          if (response.ok) {
            response.json().then((data) => console.log(data));
          } else {
            response.json().then((error) => setErrors(error.errors));
          }
        });
        // navigate("/walkers")
      }
     

      return (
        <div className="reviewForm">
        <div className="text">Go ahead, add a review</div>  
        <form onSubmit={handleSubmit}>
          <label className="field">
              <input type="text" id="rating" placeholder="rating..." autoComplete="off" value={rating} onChange={(event) => setRating(event.target.value)}/>
          </label>
          <label className="field">
              <input type="text" id="comment" placeholder="comment..." autoComplete="off" value={comment} onChange={(event) => setComment(event.target.value)} />
          </label>
          <button className="submitButton" type="submit">{isLoading ? "Loading..." : "Submit"}</button>          
        </form>
        <br></br>
        {errors.map((error) => (
          <li key={error}>{error}</li>
        ))}
      </div>
    );
  }
  
  export default ReviewForm;