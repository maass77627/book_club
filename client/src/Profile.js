import React from "react";


function Profile({user}) {



    return (
        <div className="profile">
            <p>{user.name}</p>
            <img src={user.image} alt="user"></img>
            <p>{user.books}</p>


        </div>
    )
}

export default Profile