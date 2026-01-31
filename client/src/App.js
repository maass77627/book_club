import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from "react";

function App() {
const [user, setUser] = useState(null);

// useEffect(() => {
//   fetch("http://localhost:3000/me", {

//   })
//   .then((response) => {
//      if (response.ok) {
//        response.json()
//     }
//   })
//    .then((json) => {
//      console.log(json)
//       setUser(json)
//   })
// }, [])

function login(username, password) {
  fetch("http://localhost:3000/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password })
  }).then(res => {
    if (res.ok) {
      res.json().then(setUser);
    }
  });
}


function logout() {
  fetch("http://localhost:3000/logout", {
    method: "DELETE",
  }).then(() => setUser(null));
}





  return (
    <div className="App">
     <h1> I am the App</h1>
     
    </div>
  );
}

export default App;
