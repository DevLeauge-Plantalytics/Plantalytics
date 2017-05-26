import React, {Component} from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
  }
  render(){
    return (
      <div id="analysis-search">
        <input id="analysis-search-bar" type="text" placeholder="Search Plantalytics"/>
      </div>
    )
  }
}
export default SearchBar;