import React, {Component} from 'react';
class Filter extends Component {
  constructor(props) {
    super(props);
    this.title = 'No-Warning'
  }
  render(){
    return (
      <div id="supplier-filter">
        <select name="filterType" id="filterType">
          <option value="Date">Joined</option>
          <option value="Name">Alphabetical</option>
          <option value="Score">Rating</option>
        </select>
      </div>
    )
  }
}
export default Filter;