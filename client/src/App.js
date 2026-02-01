// import logo from './logo.svg';
import './App.css';
import Nav from "./Nav";
import { useEffect, useState } from "react";
import BookContainer from "./BookContainer"
import BookForm from './BookForm';
import Home from "./Home";
import {Routes, Route} from "react-router-dom";


function App() {
const [user, setUser] = useState(null);
const [books, setBooks] = useState([]);

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

useEffect(() => {
  fetch(`http://localhost:3000/books`)
  .then((response) => response.json())
  .then((json) => { 
    console.log(json)
    setBooks(json)
  })
}, [])

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
      <Nav></Nav>
     <h1 className="hero-title"> Book Club </h1>
     <img className="hero-image" src="bookclub.jpg" alt="bookclub"></img>
     {/* <BookContainer books={books}></BookContainer> */}
     <BookForm books={books} setBooks={setBooks}></BookForm>

     <Routes>
      <Route path="/" element={<Home></Home>}/>
        <Route path="/books" element={<BookContainer books={books}></BookContainer>}/> 
         
     </Routes>
     
    </div>
    
  );
}

export default App;
