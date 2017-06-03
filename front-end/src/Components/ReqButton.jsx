import React, {Component} from 'react';
import {Link} from 'react-router-dom';
let path = window.location.pathname.slice(9);
export default ({user}) => (
  <div id="request-btn-prof">
    <Link className="req-btn-prf" to={`/conversation/${path}`}>
      <button className="req-btn">Send {user.firstname}<br/>a message</button>
    </Link>
    <Link className="req-btn-prf" to={`/request/${path}`}>
      <button className="req-btn">Send {user.firstname}<br/>a request</button>
    </Link>
  </div>
);