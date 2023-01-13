import React from "react";
import { Link } from "react-router-dom"

function WalkerCard({name, id, pic}) {

  return (
    <li className="walkerCard">
      {/* <p><span style={{fontWeight: "bold"}}>Title:</span> {title}</p> */}
      <p><span style={{fontSize: "x-large"}}>{name}</span></p>
      <p>🐶</p>
      <Link className="detailsLink" to={`/walkers/${id}`}>Read more and review!</Link>
    </li>
    
  )
}

export default WalkerCard;