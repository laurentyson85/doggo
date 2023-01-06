import React from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom"


function Nav ({ setUser }) {
    const navigate = useNavigate()

    function handleLogoutClick() {
        fetch("/logout", { method: "DELETE" }).then((response) => {
          if (response.ok) {
            setUser(null);
          }
        });
        navigate("/")
      }

      let activeStyle = {
        color:"white",
        borderBottom: "2px solid white",
      }
    
      return (
        <>
        <div className="navBar">
            <nav>
            <NavLink
                to="walkers"
                end
                style={({ isActive }) =>
                isActive ? activeStyle : undefined
                }
            >
                Welcome - All Walkers
            </NavLink>        
            <NavLink
                to="reviews"
                end
                style={({ isActive }) =>
                isActive ? activeStyle : undefined
                }
            >
                My Reviews
            </NavLink>       
            <NavLink
                to="new"
                style={({ isActive }) =>
                isActive ? activeStyle : undefined
                }
            >
                Join as Dog Walker!
            </NavLink>
            <button onClick={handleLogoutClick}>Logout</button>
            </nav>
        </div>
        
        </>
        
    )

}

export default Nav