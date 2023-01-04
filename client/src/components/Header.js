import React from "react";
import doggoImage from "../doggoImage.png"




function Header() {
    return (
      <div className="header">        
        <img id="headerImg" src={doggoImage} alt="doggoImage"/>
      </div>
    );
  }
  
  export default Header;