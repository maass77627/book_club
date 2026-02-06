import React from "react"
import LoginForm from "./LoginForm"
import SignUp from "./SignUp"
import {useState} from "react";


function Home({user, setUser}) {
    const [showLogin, setShowLogin] = useState(false)
    const [showSignUp, setShowSignUp] = useState(false)
    console.log(user)

    function showLoginForm(){
        setShowLogin(!showLogin)

    }

    function signUpForm(){
        setShowSignUp(!showSignUp)

    }

function handleLogout() {
    fetch(`http://localhost:3000/logout`, {
        method: "DELETE",
        
    })
    setUser(null)

}


    return (
        <div className="home">
            {user ? <><h2>Welcome, {user.username}!</h2> <button onClick={() => handleLogout()}>Logout</button></>: <> <p>Already a user?</p> <button onClick={() =>showLoginForm()}>Login</button> <p>Need an account?</p> <button onClick={() => signUpForm()}>Sign Up</button></>}
            <p>This is the Home</p>
            {showLogin && <LoginForm setUser={setUser}></LoginForm>}
            {showSignUp && <SignUp setUser={setUser}></SignUp> }
        </div>
    )
}

export default Home