import React from "react";
import Book from "./Book"

function BookContainer({books}) {


    return (
        <div className="book-container">
          {books.map((book) => <Book key={book.id} book={book}></Book>)}
        </div>
    )
}

export default BookContainer