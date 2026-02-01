import React from "react";
import { useState } from "react"

function LoginForm() {
    const [username, setUsername] = useState([])
    const[password, setPassword] = useState([])

    function handleSubmit(e) {
        e.preventDefault()
        fetch(`http://localhost:3000/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({username: username, password: password})
        })
        .then((response) => response.json())
        .then((json) => {
            console.log(json)
        })
        
        

    }


    return (
        <div>
            <Form onSubmit={(e) =>handleSubmit(e)} className="login-form">
                <input type="text" placeholder="Username" name="username" value={username}></input>
                <input type="text" placeholder="Password" name="password" value={password}></input>
                <submit type="submit" ></submit>

            </Form>
        </div>
    )
}

export default LoginForm