import React, {Component} from 'react';
import {Link} from 'react-router-dom';
let path = window.location.pathname.slice(9);
export default () => (
  <div id="request-btn-prof">
    <Link id="req-btn-prf" to={`/request/${path}`}>
      <button id="req-btn">Make a request<br/>to this user.</button>
    </Link>
  </div>
);