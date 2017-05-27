import React, {Component} from 'react';
class Filter extends Component {
  constructor(props) {
    super(props);
  }
  render(){
    return (
      <div id="inbox-filter">
        <select name="filterType" id="filter-type">
          <option value="Date">When</option>
          <option value="Sender">Who</option>
          <option value="Importance">Why</option>
        </select>
      </div>
    )
  }
}
export default Filter;