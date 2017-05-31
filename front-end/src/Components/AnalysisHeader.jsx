import React, {Component} from 'react';

export default () => (
  <div id="analysis-header">
    {localStorage.loggedIn === undefined &&
    <ul id="analysis-header-items">
      <li className="analysis-header-item">You are looking information for {localStorage.addressSearched}</li>
    </ul>
    }
    {localStorage.loggedIn &&
    <ul id="analysis-header-items">
      <li className="analysis-header-item">You are looking information for {localStorage.address}</li>
    </ul>
    }
  </div>
)