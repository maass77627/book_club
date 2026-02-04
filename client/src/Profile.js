import React from "react";
import {useEffect, useState} from "react";


function Profile({user}) {
    // console.log(user.books)
    // console.log(user)
    // console.log(user.books.reviews)
    const [userBooks, setUserBooks] = useState([])

    useEffect(() => {
        

        fetch(`http://localhost:3000/users/${user.id}/book_reviews`)
        .then((response) => response.json())
        .then((json) => {
            console.log(json)
            setUserBooks(json)
        })

    }, [])

    
console.log(userBooks)

    return (
        <div className="profile">
            {/* <strong> <p className="pro-name">{user.username}</p> </strong>
            <img className="pro-img" src={user.image} alt="user"></img>
            <p>{user.books}</p>
            {userBooks.map((bookreview) => (
                <>
                <p>{bookreview[0].book.title}</p>
                <img className="pro-book-img" src={bookreview[0].book.image}></img>
                </> */}
            {/* ))}  */}


        </div>
    )
}

export default Profile