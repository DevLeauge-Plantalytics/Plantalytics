import React, {Component} from 'react';
class Filter extends Component {
  constructor(props) {
    super(props);
    this.title = 'No-Warning'
  }
  render(){
    return (
      <div id="supplier-filter">
       <h3 id="find-a-sup">Find a Supplier Near You</h3>
       <button className="filter-btn">Filter by Zipcode</button>
       <button className="filter-btn">Filter by Plants</button>
      </div>
    )
  }
}
export default Filter;