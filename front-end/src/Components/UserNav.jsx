import React from 'react';
import {Link} from 'react-router-dom';

export default () => (
  <div id="user-nav">
    <ul id="user-nav-items">
      <Link to="/tradesdone"><li className="user-nav-item">Trades</li></Link>
      <Link to="/requests"><li className="user-nav-item">Requests</li></Link>
      <Link to="/quotations"><li className="user-nav-item">Quotations</li></Link>
      <Link to="/inbox"><li className="user-nav-item">Messages</li></Link>
    </ul>
  </div>
)