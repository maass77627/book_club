import React from "react";
import {useState} from "react";
import BookEditForm from "./BookEditForm";


function Book ({book, setBooks, books}) {
    const [editToggle, setEditToggle] = useState(false)

    function handleDelete(id) {
        fetch(`http://localhost:3000/books/${id}`,{
            credentials: "include",
            method: "DELETE"
        })
        let newbooks = books.filter((book) => book.id !== id)
         setBooks(newbooks)
    }

    function handleEdit() {
        setEditToggle(!editToggle)
        
    }


    return (
        <div className="book">
            {editToggle && <BookEditForm book={book}></BookEditForm>}
            {/* <button onClick={() => handleDelete(book.id)}>x</button> */}
            <i  onClick={() => handleDelete(book.id)} className="fa-regular fa-trash-can"></i>
            <i  className="fa-solid fa-pen-fancy"></i>
            <i onClick={() => handleEdit(book)} className="fa-solid fa-screwdriver"></i>
             <h1 className="book-title">{book.title}</h1>
             <img className="book-image" src={book.image} alt="bookalt"/>
             <p>{book.author}</p>
             <p>{book.description}</p>
             <p>{book.rating}</p>
        </div>

    )
}

export default Book