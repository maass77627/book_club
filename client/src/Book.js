import React from "react";


function Book ({book}) {

    function handleDelete(id) {
        fetch(`http://localhost:3000/books/${id}`,{
            method: "DELETE"
        })
    }

    
    return (
        <div className="book">
            <button onClick={() => handleDelete(book.id)}>x</button>
            <i class="fa-solid fa-pen-fancy"></i>
             <h1 className="book-title">{book.title}</h1>
             <img className="book-image" src={book.image} alt="bookalt"/>
             <p>{book.author}</p>
             <p>{book.description}</p>
             <p>{book.rating}</p>
        </div>

    )
}

export default Book