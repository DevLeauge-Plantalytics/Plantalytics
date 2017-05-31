import React, {Component} from 'react';

class AnalysisHeader extends Component {
  constructor(props) {
    super(props);
    this.title = 'No-Warning'
  }
  render(){

    return (
      <div id="analysis-header">
      {localStorage.loggedIn === undefined &&
        <ul id="analysis-header-items">
          <li className="analysis-header-item">You are looking information for <span>{localStorage.addressSearched}</span></li>
        </ul>
      }
      {localStorage.loggedIn &&
        <ul id="analysis-header-items">
          <li className="analysis-header-item">You are looking information for <span>{localStorage.address}</span></li>
        </ul>
      }
      </div>
    )
  }
}

export default AnalysisHeader;

