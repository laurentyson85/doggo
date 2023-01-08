import React, { useState } from "react";
import { useNavigate } from "react-router-dom"

function WalkerForm({ onLogin }) {
    const navigate = useNavigate()
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [dogBreed, setDogBreed] = useState("");
    const [url, setUrl] = useState("");
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false)


    function handleSubmit(event) {
        event.preventDefault();
        setErrors([]);
        setIsLoading(true)

        fetch("/dog_walkers", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: name,
            phone: phone,
            favorite_dog_breed: dogBreed,
            image_url: url,
          }),
        }).then((response) => {
          setName("")
          setPhone("")
          setDogBreed("")
          setUrl("")
          setIsLoading(false);
          if (response.ok) {
            response.json().then((data) => console.log(data));//send this data up to app
            // navigate("/walkers")
          } else {
            response.json().then((error) => setErrors(error.errors));
          }
        });        
      }
     

      return (
        <div className="addWalkerForm">
        <div className="text">Join us as a dog walker!</div>  
        <form onSubmit={handleSubmit}>
          <label className="field">
              <input type="text" id="name" placeholder="name..." autoComplete="off" value={name} onChange={(event) => setName(event.target.value)}/>
          </label>
          <label className="field">
              <input type="text" id="phone" placeholder="phone..." autoComplete="off" value={phone} onChange={(event) => setPhone(event.target.value)} />
          </label>
          <label className="field">
              <input type="text" id="dog_breed" placeholder="favorite dog breed..." autoComplete="off" value={dogBreed} onChange={(event) => setDogBreed(event.target.value)} />
          </label>
          <label className="field">
              <input type="text" id="url" placeholder="bio picture url..." autoComplete="off" value={url} onChange={(event) => setUrl(event.target.value)} />
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
  
  export default WalkerForm;