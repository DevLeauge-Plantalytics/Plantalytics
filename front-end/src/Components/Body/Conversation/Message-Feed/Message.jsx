import React from 'react';

const Message = (props) => (
    <div className="message">
      {props.message.Sender === Number(localStorage.id) &&
      <p className="other-user-message">{ props.message.body }</p>
      }
      {props.message.Sender !== Number(localStorage.id) &&
      <p className="your-message">{ props.message.body }</p>
      }
    </div>
  );

export default Message