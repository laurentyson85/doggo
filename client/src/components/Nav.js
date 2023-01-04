import React from "react";


function Nav ({ setUser }) {
    function handleLogoutClick() {
        fetch("/logout", { method: "DELETE" }).then((response) => {
          if (response.ok) {
            setUser(null);
          }
        });
      }
    
      return (
        <button onClick={handleLogoutClick}>Logout</button>
    )

}

export default Nav