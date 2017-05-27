import React from 'react';

const Message = (props) => (
    <div className="message">
      {props.message.Sender === Number(localStorage.id) &&
      <p className="sender"> <span>Body:</span> { props.message.body }</p>
      }
      {props.message.Sender !== Number(localStorage.id) &&
      <p className="receiver"> <span>Body:</span> { props.message.body }</p>
      }
    </div>
  );

export default Message