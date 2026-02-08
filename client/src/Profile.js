import React from "react";

 import {useState} from "react";
 import BookEditForm from "./BookEditForm";

import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';

function Profile({user, setBooks, books, setReviewFormToggle, reviewFormToggle, setReviewBook, editBook, setEditBook}) {
    console.log(user)
    console.log(books)


    function renderPopover(book) {
        // let comment = book.review?.comment;
        // let rating = book.review?.rating
    // let rating = book.reviews[0]?.rating
    let comment = book.reviews?.[0]?.comment;
    let rating = book.reviews[0]?.rating
     let stars = []
     for (let i=0; i<5; i++) {
       let star = (
        <i className="fa-solid fa-star star" style={{color: i < rating ? "yellow" : "black"}}></i>
       )
       stars.push(star)

     }
     console.log(rating)


   return ( <Popover id="popover-basic">
      <Popover.Header as="h3">My Review</Popover.Header>
      <Popover.Body>
        <p>{comment ? comment : "You have not made a review"}</p>
       <div>
        {stars}
       </div>
      </Popover.Body>
    </Popover>)
};
    
    

     const [editToggle, setEditToggle] = useState(false)

    function handleDelete(e,id) {
        e.stopPropagation()
        console.log(id)
        console.log("in delete")
        fetch(`http://localhost:3000/books/${id}`,{
            credentials: "include",
            method: "DELETE"
        })
        let newbooks = books.filter((book) => book.id !== id)
         setBooks(newbooks)
    }

    function handleEdit(e, book) {
        e.stopPropagation()
        setEditToggle(!editToggle)
        setEditBook(book)
        // setReviewFormToggle(!reviewFormToggle)
        
    }

    function handleReview(e,book) {
        e.stopPropagation()
        setReviewBook(book)
        setReviewFormToggle(!reviewFormToggle)
    }
   

    let probooks = user && books ? books.filter((book) => book.user_id === user.id) : []
    console.log(probooks)

    return (
         <div className="pro-wrap">
        <div className="profile">
             <strong> <p className="pro-name">{user.username}</p> </strong>
             <img className="pro-img" src={user.image} alt="user"></img> 
             <div className="pro-books">
              {probooks.map((book) => (
                <>
                 <OverlayTrigger trigger={['hover', 'focus']} placement="right" overlay={renderPopover(book)} rootClose>
                <div className="pro-book">
                <img className="pro-book-image" src={book.image} alt="image"></img>
                {/* <p>{book.title}</p> */}
               
                 {editToggle && <BookEditForm editBook={editBook} setBooks={setBooks} book={book}></BookEditForm>} 
                       <div className="buttons">
                 <i onClick={(e) => handleDelete(e,book.id)} className="fa-regular fa-trash-can"></i>

                 <i onClick={(e) => handleReview(e,book)}  className="fa-solid fa-pen-fancy"></i>

                 <i onClick={(e) => handleEdit(e, book)} className="fa-solid fa-screwdriver"></i> 
                 </div>
                </div>
                </OverlayTrigger>
                </>
                ))}
              </div>
                 </div>
                 
             </div>
                
    )
}

export default Profile