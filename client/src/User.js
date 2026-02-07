import React from "react";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';


function User({user, books}) {
    console.log(user)

function renderPopover(book) {
    let comment = book.reviews?.[0]?.comment;
    let rating = book.reviews[0]?.rating
     let stars = []
     for (let i=0; i<5; i++) {
       let star = (
        <i className="fa-solid fa-star star" style={{color: i < rating ? "yellow" : "black"}}></i>
       )
       stars.push(star)

     }
    

  console.log(rating)


   return ( <Popover id="popover-basic">
      <Popover.Header as="h3">My Review</Popover.Header>
      <Popover.Body>
        <p>{comment ? comment : "You have not made a review"}</p>
       <div>
        {stars}
       </div>
      </Popover.Body>
    </Popover>)
};


let probooks = user && books ? books.filter((book) => book.user_id === user.id) : []


    console.log(user)
    return (
        <div className="user">
          <strong> <p className="user-name">{user.username}</p></strong> 
            <img src={user.image} alt="alter"></img>
            <div className="user-books">
            {probooks.map((book) => (
                <>
                <OverlayTrigger trigger={['hover', 'focus']} placement="right" overlay={renderPopover(book)} rootClose>
                    <div >
                {/* <p>{book.title}</p> */}
                <img className="book-image" src={book.image} alt="book"></img>
                </div>
                </OverlayTrigger>
                </>
            ))}
            </div>
                  
        </div>
    )
}

export default User