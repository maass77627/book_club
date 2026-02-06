import React from "react";
import Book from "./Book"


function BookContainer({books, setBooks, reviewFormToggle, setReviewFormToggle, reviewBook, setReviewBook}) {
console.log(books)

    return (
        <div className="book-container">
            <div className="books-wrap">
          {books.map((book) => <Book reviewFormToggle={reviewFormToggle} setReviewFormToggle={setReviewFormToggle} books={books} setBooks={setBooks} key={book.id} book={book} reviewBook={reviewBook} setReviewBook={setReviewBook}></Book>)}
       </div>
        </div>
    )
}

export default BookContainer