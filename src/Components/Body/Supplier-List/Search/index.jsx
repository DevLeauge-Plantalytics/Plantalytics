import React, {Component} from 'react';
class Search extends Component {
  constructor(props) {
    super(props);
    this.title = 'No-Warning'
  }
  render(){
    return (
      <div id="supplier-search">
        <img src="peechure" alt="Supplier Though"/>
        <input type="text"/>
        <button>Go!</button>
      </div>
    )
  }
}
export default Search;