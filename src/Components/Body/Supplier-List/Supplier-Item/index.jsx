import React, {Component} from 'react';
class SupplierItem extends Component {
  constructor(props) {
    super(props);
  }
  render(){
    return (
      <div id="supplier-items-list">
        <ul>
          <li>
            <img src="sup1-prof-pic"></img>
            <p>Supplier Name1</p>
          </li>
          <li>
            <img src="sup2-prof-pic"></img>
            <p>Supplier Name2</p>
          </li>
          <li>
            <img src="sup3-prof-pic"></img>
            <p>Supplier Name3</p>
          </li>
        </ul>
      </div>
    )
  }
}
export default SupplierItem;