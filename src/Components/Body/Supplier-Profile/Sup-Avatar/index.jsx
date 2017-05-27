import React, {Component} from 'react';
class SupplierAvatar extends Component {
  constructor(props) {
    super(props);
    this.title = 'No-Warning'
  }
  render(){
    return (
      <div id="supplier-avatar">
        <img id="supplier-profile-pic" alt="Supplier Profile"/>
      </div>
    )
  }
}
export default SupplierAvatar;