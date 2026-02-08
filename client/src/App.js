// import logo from './logo.svg';
import './App.css';
import Nav from "./Nav";
import { useEffect, useState } from "react";
import BookContainer from "./BookContainer"
import BookForm from './BookForm';
import Home from "./Home";
import {Routes, Route} from "react-router-dom";
 import Footer from "./Footer"
 import Profile from "./Profile";
// import ReviewsContainer from './ReviewsContainer';
import ReviewForm from './ReviewForm';
import UserContainer from './UserContainer';

function App() {
const [user, setUser] = useState(null);
const [books, setBooks] = useState([]);
const [bookFormToggle, setBookFormToggle] = useState(false);
const [reviewFormToggle, setReviewFormToggle] = useState(false)
const [users, setUsers] = useState([])
const [reviewBook, setReviewBook] = useState([])
const [editBook, setEditBook] = useState([])

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

useEffect(() => {
   fetch(`http://localhost:3000/users`)
  .then((response) => response.json())
  .then((json) => { 
    console.log(json)
    setUsers(json)
  })

}, [])





console.log(user)




  return (
    <div className="App">

      <Nav bookFormToggle={bookFormToggle} setBookFormToggle={setBookFormToggle} user={user}></Nav>
     <h1 className="hero-title"> Book Club </h1>
     <img className="hero-image" src="bookclub.jpg" alt="bookclub"></img>
     
     {reviewFormToggle && <ReviewForm reviewFormToggle={reviewFormToggle} setReviewFormToggle={setReviewFormToggle} setBooks={setBooks} reviewBook={reviewBook} user={user}></ReviewForm>}
    {bookFormToggle && <BookForm books={books} setBooks={setBooks}></BookForm>}
     
     <Routes>
      <Route path="/" element={<Home setUser={setUser} user={user}></Home>}/>
        <Route path="/books" element={<BookContainer reviewBook={reviewBook} setReviewBook={setReviewBook} reviewFormToggle={reviewFormToggle} setReviewFormToggle={setReviewFormToggle} user={user} setBooks={setBooks} books={books}></BookContainer>}/>
         <Route path="/users" element={<UserContainer books={books} users={users}></UserContainer>}/> 
         <Route path="/profile" element={<Profile editBook={editBook} setEditBook={setEditBook} setReviewFormToggle={setReviewFormToggle} reviewFormToggle={reviewFormToggle} setReviewBook={setReviewBook}  setBooks={setBooks}  books={books} user={user}></Profile>}/> 
         
     </Routes>
     {/* <ReviewsContainer></ReviewsContainer> */}
     
      <Footer></Footer> 
    </div>
    
  );
}

export default App;
