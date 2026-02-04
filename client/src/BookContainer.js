import React from "react";
import Book from "./Book"
import Profile from "./Profile";

function BookContainer({books, setBooks, user, reviewFormToggle, setReviewFormToggle}) {
console.log(books)

    return (
        <div className="book-container">
            <div className="books-wrap">
          {books.map((book) => <Book reviewFormToggle={reviewFormToggle} setReviewFormToggle={setReviewFormToggle} books={books} setBooks={setBooks} key={book.id} book={book}></Book>)}
       </div>
       {user && <Profile user={user}></Profile>}
        </div>
    )
}

export default BookContainer