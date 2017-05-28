import React from 'react';

const Message = (props) => (
    <div className="message">
      {props.message.Sender === Number(localStorage.id) &&
      <p className="other-user-message"> <span>Me:</span> { props.message.body }</p>
      }
      {props.message.Sender !== Number(localStorage.id) &&
      <p className="your-message"> <span>You:</span> { props.message.body }</p>
      }
    </div>
  );

export default Message