import React from "react";
import { useState} from "react";

function BookForm({books, setBooks}) {

  const [formData, setFormData] = useState({
    title: "",
    author: "",
    genre: "",
    image: "",
    description: ""
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    fetch("http://localhost:3000/books", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
      .then(res => res.json())
      .then(json => {
        setBooks(json);
      });
  }

  return (
    

    <form className="book-form" onSubmit={handleSubmit}>
        <label>Add your Book</label>
      <input name="title" placeholder="Title" value={formData.title} onChange={handleChange} />

      <input name="author" placeholder="Author" value={formData.author} onChange={handleChange} />

      <input name="genre" placeholder="Genre" value={formData.genre}  onChange={handleChange}/>

      <input name="image" placeholder="Image URL" value={formData.image} onChange={handleChange}/>

      <textarea name="description" placeholder="Description" value={formData.description} onChange={handleChange}/>

      <button type="submit">Add Book</button>
    </form>
    
  );
}


export default BookForm