import React, {Component} from 'react';
class Search extends Component {
  constructor(props) {
    super(props);
    this.title = 'No-Warning'
  }
  render(){
    return (
      <div id="supplier-search">
        <h1 id="look-up-loc">LOOK UP ANOTHER LOCATION</h1>
        <img id="sup-search-pic" src="http://www.hawaiiphotographytours.com/wp-content/uploads/2015/10/Manoa-Valley-1024x768.jpg"/>
        <input id="sup-search-bar" type="text"/>
        <button id="sup-search-btn">Search</button>
      </div>
    )
  }
}
export default Search;