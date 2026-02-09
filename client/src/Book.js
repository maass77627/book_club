import React from "react";


function Book ({book, setReviewFormToggle, reviewFormToggle, setReviewBook}) {
   

    // function handleReview(book) {
    //     setReviewBook(book)
    //     setReviewFormToggle(!reviewFormToggle)
    // }


    return (
        <div className="book">
           
            {/* <i onClick={() => handleReview(book)}  className="fa-solid fa-pen-fancy"></i> */}
             <h1 className="book-title">{book.title}</h1>
             <img className="book-image" src={book.image} alt="bookalt"/>
             <p>{book.author}</p>
             <p>{book.description}</p>
             <p>{book.rating}</p>
        </div>

    )
}

export default Book