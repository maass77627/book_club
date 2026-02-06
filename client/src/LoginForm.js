import React from "react";
import { useState } from "react"

function LoginForm({setUser}) {
    const [username, setUsername] = useState("")
    const[password, setPassword] = useState("")
    

    function handleSubmit(e) {
        e.preventDefault()
        console.log({
  username,
  password
 
})
        fetch(`http://localhost:3000/login`, {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({username: username, password: password})
        })
        .then((response) => {
            if (response.ok) {
           return response.json()
            }
            throw new Error("Invalid login")
        })
        .then((json) => {
            console.log(json)
            setUser(json)
            })
            .catch((error) =>{
                console.error(error)
            })
        
        

    }


    return (
        <div>
            
            <form onSubmit={(e) => handleSubmit(e)} className="login-form">
                <label>Login</label><br></br>
                <input onChange={(e) => setUsername(e.target.value)} type="text" placeholder="Username" name="username" value={username}></input>
                <input onChange={(e) => setPassword(e.target.value)} type="text" placeholder="Password" name="password" value={password}></input><br></br>
                <button onClick={() => console.log("LOGIN BUTTON CLICKED")} type="submit"  >Submit</button>

            </form>
        </div>
    )
}

export default LoginForm