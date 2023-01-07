import React from "react";
import { Link } from "react-router-dom"

function WalkerCard({name, id}) {

  return (
    <li className="walkerCard">
      {/* <p><span style={{fontWeight: "bold"}}>Title:</span> {title}</p> */}
      <span>{name}</span>
      <br></br>
      <Link className="detailsLink" to={`/walkers/${id}`}>Reviews</Link>
    </li>
    
  )
}

export default WalkerCard;