import React from "react";
import {NavLink} from "react-router-dom"


function Nav({setBookFormToggle, bookFormToggle}) {
    

    

    return (
        <div className="nav">
            <NavLink className="link" to="/">Home</NavLink>
            <NavLink className="link" to="/profile">Profile</NavLink>
            <button onClick={() => setBookFormToggle(!bookFormToggle)} className="book-button">Add A Book</button>
            <NavLink className="link" to="/books">Library</NavLink>
            <NavLink className="link" to="/users">Friends</NavLink>
            

        </div>
    )
}

export default Nav