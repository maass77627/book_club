import React from "react";
import {NavLink} from "react-router-dom"
// import { useState } from "react"

function Nav({user, setBookFormToggle, bookFormToggle}) {
    
    //  const [showLogin, setShowLogin] = useState([])


    // function handleLogout() {


    // }

    

    return (
        <div className="nav">
            <NavLink className="link" to="/">Home</NavLink>
            <NavLink className="link" to="/books">Books</NavLink>
            <button onClick={() => setBookFormToggle(!bookFormToggle)} className="book-button">Add A Book</button>
            {/* <button onClick={handle}>Login</button> */}
            

        </div>
    )
}

export default Nav