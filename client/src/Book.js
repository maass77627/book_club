import React from "react";


function Book ({book}) {
    return (
        <div className="book">
             <h1>{book.title}</h1>
             <p>{book.image}</p>
             <p>{book.author}</p>
             <p>{book.description}</p>
             <p>{book.rating}</p>
        </div>

    )
}

export default Book