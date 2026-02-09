import React from "react";
import Book from "./Book"


function BookContainer({books, setBooks, reviewFormToggle, setReviewFormToggle, reviewBook, setReviewBook}) {
console.log(books)

const uniqueBooks = books.filter(
  (book, i, arr) =>
    i === arr.findIndex(b => b.title == book.title)
);
    return (
        <div className="book-container">
            <div className="books-wrap">
          {uniqueBooks.map((book) => <Book reviewFormToggle={reviewFormToggle} setReviewFormToggle={setReviewFormToggle} books={books} setBooks={setBooks} key={book.id} book={book} reviewBook={reviewBook} setReviewBook={setReviewBook}></Book>)}
       </div>
        </div>
    )
}

export default BookContainer