import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default (props) => (
  <div id="request-btn-prof">
    <Link className="req-btn-prf" to={`/conversation/${props.user.id}`}>
      <button className="req-btn">Send {props.user.firstname}<br/>a message</button>
    </Link>
    <Link className="req-btn-prf" to={`/request/${props.user.id}`}>
      <button className="req-btn">Send {props.user.firstname}<br/>a request</button>
    </Link>
  </div>
);