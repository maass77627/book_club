import React from "react";
import {NavLink} from "react-router-dom"

function Nav() {


    return (
        <div className="nav">
            <NavLink className="link" to="/">Home</NavLink>
            <NavLink className="link" to="/books">Books</NavLink>
         
            

        </div>
    )
}

export default Nav