// import logo from './logo.svg';
import './App.css';
import Nav from "./Nav";
import { useEffect, useState } from "react";
import BookContainer from "./BookContainer"
import BookForm from './BookForm';
import Home from "./Home";
import {Routes, Route} from "react-router-dom";
 import Footer from "./Footer"
// import Profile from "./Profile";
import ReviewsContainer from './ReviewsContainer';
import ReviewForm from './ReviewForm';


function App() {
const [user, setUser] = useState(null);
const [books, setBooks] = useState([]);
const [bookFormToggle, setBookFormToggle] = useState(false);
const [reviewFormToggle, setReviewFormToggle] = useState(false)

useEffect(() => {
  fetch("http://localhost:3000/me", {
    credentials: "include"

  })
  .then((response) => {
     if (response.ok) {
      return response.json()
    }
    return null
  })
   .then((json) => {
     console.log(json)
      setUser(json)
  })
}, [])

useEffect(() => {
  fetch(`http://localhost:3000/books`)
  .then((response) => response.json())
  .then((json) => { 
    console.log(json)
    setBooks(json)
  })
}, [])





console.log(user)




  return (
    <div className="App">

      <Nav bookFormToggle={bookFormToggle} setBookFormToggle={setBookFormToggle} user={user}></Nav>
     <h1 className="hero-title"> Book Club </h1>
     <img className="hero-image" src="bookclub.jpg" alt="bookclub"></img>
     
     {reviewFormToggle && <ReviewForm></ReviewForm>}
    {bookFormToggle && <BookForm books={books} setBooks={setBooks}></BookForm>}
      
     <Routes>
      <Route path="/" element={<Home setUser={setUser} user={user}></Home>}/>
        <Route path="/books" element={<BookContainer reviewFormToggle={reviewFormToggle} setReviewFormToggle={setReviewFormToggle} user={user} setBooks={setBooks} books={books}></BookContainer>}/> 
         
     </Routes>
     <ReviewsContainer></ReviewsContainer>
      <Footer></Footer> 
    </div>
    
  );
}

export default App;
