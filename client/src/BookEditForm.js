import React from "react"
import { useState} from "react";


function BookEditForm({book, setBooks, editBook}) {
    // const [hideForm, setHideForm] = useState(false)

    const [formData, setFormData] = useState({
    title: editBook.title,
    author: editBook.author,
    genre: editBook.genre,
    image: editBook.image,
    description: editBook.description
  });


  function handleChange(e) {

    
    setFormData({...formData, [e.target.name]: e.target.value })

  }

  function handleSubmit(e, id) {
    console.log(id)
    console.log(formData)
    e.preventDefault()
    fetch(`http://localhost:3000/books/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "include",
      body: JSON.stringify(formData)
    })
      .then(res => res.json())
      .then(json => {
        console.log(json)
        setBooks((prevBooks) => prevBooks.map((book) =>
             book.id === id ? json : book
      ))
        
      });


  }


    return(
        <form onSubmit={(e) => handleSubmit(e, book.id)} className="book-edit-form">
            {/* <button onClick={setHideForm(!hideForm)}>x</button> */}
              <label>Edit your Book</label>
           <input name="title"  value={formData.title} onChange={(e) => handleChange(e)} />

           <input name="author"  value={formData.author} onChange={(e) => handleChange(e)} />

           <input name="genre"  value={formData.genre}  onChange={(e) => handleChange(e)}/>

           <input name="image"  value={formData.image} onChange={(e) => handleChange(e)}/>

            <textarea name="description" placeholder="Description" value={formData.description} onChange={handleChange}/>
            <input className="submit" type="submit"></input>

        </form>
    )




}

export default BookEditForm