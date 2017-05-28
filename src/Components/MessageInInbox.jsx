import React from 'react';

export default (props) => (
  <div id="inbox-message">
    <p id="created-at">Created At: {this.props.message.createdAt}</p>
    <h1 id="from">From: {this.props.message.sender}</h1>
    <p id="snippet">Snippet: {this.props.message.message.splice(0, 15)}...</p>
  </div>
)