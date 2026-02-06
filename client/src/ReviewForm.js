import React from "react";
import {useState} from "react";

function ReviewForm({reviewBook}) {
    console.log(reviewBook)
    const [rating, setRating] = useState()
    const [comment, setComment] = useState("")

   

    function handleSubmit(e, reviewBook) {
      let  book_id = reviewBook.id
     
        e.preventDefault()
        fetch(`http://localhost:3000/books/${book_id}/reviews`,{
                method: "POST",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({rating: rating, comment: comment})

    })
    .then((response) => response.json())
    .then((json) => {
        console.log(json)
    })
    
    }


    return(
        <div className="review-form">
            Add a Review
            <form onSubmit={(e) => handleSubmit(e, reviewBook)}>
        <input name="comment" placeholder="Comment" value={comment} onChange={(e) => setComment(e.target.value)} />

         <input name="rating" placeholder="Rating" value={rating} onChange={(e) => setRating(e.target.value)} /><br></br>

         <input value="submit" type="submit" />
            </form>

        </div>
    )
}

export default ReviewForm