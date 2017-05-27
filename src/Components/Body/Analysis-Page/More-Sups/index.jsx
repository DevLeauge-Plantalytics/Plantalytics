import React, {Component} from 'react';
class MoreSuppliers extends Component {
  constructor(props) {
    super(props);
    this.title = 'No-Warning'
  }
  render(){
    return (
      <div id="more-sups">
        <button id="get-more-sups">More Suppliers</button>
      </div>
    )
  }
}
export default MoreSuppliers;