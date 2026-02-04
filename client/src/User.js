import React from "react";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';


function User({user}) {

const popover = (
    <Popover id="popover-basic">
      <Popover.Header as="h3">My Review</Popover.Header>
      <Popover.Body>
        
        <label className="label">Location:</label>
       {/* <p>{item.location}</p> */}
       <label className="label">Notes:</label>
       {/* <p>{item.notes}</p> */}
       <label className="label">Time:</label>
       {/* <p>{item.time}</p> */}
       
        
      </Popover.Body>
    </Popover>
  );


    console.log(user)
    return (
        <div className="user">
            <p>{user.username}</p>
            <img src={user.image} alt="alter"></img>
            {user.books.map((book) => (
                <>
                <OverlayTrigger trigger={['hover', 'focus']} placement="right" overlay={popover} rootClose>
                    <div>
                <p>{book.title}</p>
                <img className="book-image" src={book.image} alt="book"></img>
                </div>
                </OverlayTrigger>
                </>
            ))}


        </div>
    )
}

export default User