import React, {Component} from 'react';

export default () => (
  <div id="analysis-header">
    {localStorage.addressSearched !== undefined &&
    <ul id="analysis-header-items">
      <li className="analysis-header-item">Here's your location analysis for {localStorage.addressSearched}!</li>
    </ul>
    }
    {localStorage.loggedIn &&
    <ul id="analysis-header-items">
      <li className="analysis-header-item">Here's your location analysis for {localStorage.address}!</li>
    </ul>
    }
  </div>
)