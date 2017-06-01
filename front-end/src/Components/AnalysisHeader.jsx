import React, {Component} from 'react';

export default () => (
  <div id="analysis-header">
    {localStorage.searchedAddress !== undefined &&
    <ul id="analysis-header-items">
      <li className="analysis-header-item">You are looking information for {localStorage.searchedAddress}</li>
    </ul>
    }
    {localStorage.loggedIn &&
    <ul id="analysis-header-items">
      <li className="analysis-header-item">You are looking information for {localStorage.address}</li>
    </ul>
    }
  </div>

)