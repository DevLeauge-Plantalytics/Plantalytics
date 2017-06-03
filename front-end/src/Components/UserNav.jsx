import React from 'react';
import {Link} from 'react-router-dom';

export default () => (
  <div id="user-nav">
    <ul id="user-nav-items">
      <Link className="user-nav-link" to="/tradesdone"><li className="user-nav-item">Trades</li></Link>
      <Link className="user-nav-link" to="/requests"><li className="user-nav-item">Requests</li></Link>
      <Link className="user-nav-link" to="/quotations"><li className="user-nav-item">Quotations</li></Link>
      <Link className="user-nav-link" to="/inbox"><li className="user-nav-item">Messages</li></Link>
    </ul>
  </div>
)