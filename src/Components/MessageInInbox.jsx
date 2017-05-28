import React from 'react';

export default (props) => (
  <div id="inbox-message">
    <h4 id="from">From: {props.message.Author.username}</h4>
    <h5 id="body"> {props.message.body}</h5>
    <h5 id="created-at">Created At: {props.message.createdAt}</h5>
  </div>
)
