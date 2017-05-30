import React, {Component} from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.title = 'No-Warning'
  }
  render(){
    return (
      <div id="analysis-search">
      <h1 id="look-up-locat">LOOK UP ANOTHER LOCATION</h1>
        <input id="analysis-search-bar" type="text" placeholder="Search Plantalytics"/>
        <button id="analysis-search-btn">Search</button>
      </div>
    )
  }
}
export default SearchBar;