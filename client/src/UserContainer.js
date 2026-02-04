import React from "react";
import User from "./User";

function UserContainer({users}) {
    console.log(users)
    


    return (
        <div className="user-container">
            {users.map((user) => <User key={user.id} user={user}></User>)}

        </div>
    )
}

export default UserContainer