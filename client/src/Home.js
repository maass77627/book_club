import React from "react"
import LoginForm from "./LoginForm"
import SignUp from "./SignUp"


function Home({user, setUser}) {
    console.log(user)




    return (
        <div className="home">
            <p>This is the Home</p>
             {user ? <h2>Welcome, {user.username}!</h2> : <LoginForm setUser={setUser}></LoginForm>}
             <SignUp setUser={setUser}></SignUp>
        </div>
    )
}

export default Home