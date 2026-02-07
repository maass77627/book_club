import React from "react";
import {useState} from "react"


function SignUp({setUser}) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState("");
  const [password_confirmation, setPasswordConfirmation] = useState("");
 

  function handleSubmit(e) {
    e.target.classList.add("hidden")
    e.preventDefault()
    fetch("http://localhost:3000/signup", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        credentials: "include",
        body: JSON.stringify({username: username, password: password, password_confirmation: password_confirmation, image: image})
    })
    .then((response) => response.json())
    .then((json) => {
        setUser(json)
        console.log(json)
    })

  }

    return(
        <form className="signup" onSubmit={(e) => handleSubmit(e)}>
            <label>Sign Up</label><br></br>
            <label>UserName</label><br></br>
            <input onChange={(e) => setUsername(e.target.value)} type="text" name="username" value={username}></input><br></br>
            <label>Password</label><br></br>
            <input onChange={(e) => setPassword(e.target.value)} type="text" name="password" value={password}></input><br></br>
            <label>Password Confirmation</label><br></br>
            <input onChange={(e) => setPasswordConfirmation(e.target.value)} type="text" name="password_confirmation" value={password_confirmation}></input>
            <label>Image</label><br></br>
            <input onChange={(e) => setImage(e.target.value)} type="text" name="image" value={image}></input>
              <button type="submit">Submit</button>
        </form>

    )
}


export default SignUp