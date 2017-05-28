import React from 'react';

export default (props) => (
  <div id="inbox-message">
    {console.log(props)}
    <p id="created-at">Created At: {props.message.createdAt}</p>
    <h1 id="from">From: {props.message.Sender}</h1>
    <h2 id="from">From: {props.message.body}</h2>
  </div>
)
