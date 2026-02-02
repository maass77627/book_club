import React from "react";
import {NavLink} from "react-router-dom"
// import { useState } from "react"

function Nav({user}) {
    
    //  const [showLogin, setShowLogin] = useState([])


    // function handleLogout() {


    // }

    

    return (
        <div className="nav">
            <NavLink className="link" to="/">Home</NavLink>
            <NavLink className="link" to="/books">Books</NavLink>
            {/* <button onClick={handle}>Login</button> */}
            

        </div>
    )
}

export default Nav