import React from "react";
import Book from "./Book"

function BookContainer({books, setBooks}) {
console.log(books)

    return (
        <div className="book-container">
          {books.map((book) => <Book books={books} setBooks={setBooks} key={book.id} book={book}></Book>)}
        </div>
    )
}

export default BookContainer