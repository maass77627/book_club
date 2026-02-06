import React from "react";

 import {useState} from "react";
 import BookEditForm from "./BookEditForm";


function Profile({user, setBooks, books, setReviewFormToggle, reviewFormToggle, setReviewBook}) {
    console.log(user)
    
    

     const [editToggle, setEditToggle] = useState(false)

    function handleDelete(e,id) {
        e.stopPropagation()
        console.log(id)
        console.log("in delete")
        fetch(`http://localhost:3000/books/${id}`,{
            credentials: "include",
            method: "DELETE"
        })
        let newbooks = books.filter((book) => book.id !== id)
         setBooks(newbooks)
    }

    function handleEdit(e) {
        e.stopPropagation()
        setEditToggle(!editToggle)
        setReviewFormToggle(!reviewFormToggle)
        
    }

    function handleReview(e,book) {
        e.stopPropagation()
        setReviewBook(book)
        setReviewFormToggle(!reviewFormToggle)
    }
   

    let probooks = user && books ? books.filter((book) => book.user_id === user.id) : []
    console.log(probooks)

    return (
        <div className="pro-wrap">
        <div className="profile">
             <strong> <p className="pro-name">{user.username}</p> </strong>
             <img className="pro-img" src={user.image} alt="user"></img> 
             <div className="pro-books">
              {probooks.map((book) => (
                <div>
                <img className="pro-book-image" src={book.image} alt="image"></img>
                {/* <p>{book.title}</p> */}
                 {editToggle && <BookEditForm setBooks={setBooks} book={book}></BookEditForm>} 
                       <div className="buttons">
                 <i onClick={(e) => handleDelete(e,book.id)} className="fa-regular fa-trash-can"></i>

                 <i onClick={(e) => handleReview(e,book)}  className="fa-solid fa-pen-fancy"></i>

                 <i onClick={(e) => handleEdit(e)} className="fa-solid fa-screwdriver"></i> 
                 </div>


               

                </div>
                
             ))}
             
               
           </div>



        </div>
        </div>
    )
}

export default Profile