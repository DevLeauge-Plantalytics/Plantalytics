import React, {Component} from 'react';
class SuggestedSuppliers extends Component {
  constructor(props) {
    super(props);
  }
  render(){
    return (
      <div id="suggested-sups">
        <ul>
        <li>Crop1</li>
        <li>Crop2</li>
        <li>Crop3</li>
        </ul>
      </div>
    )
  }
}
export default SuggestedSuppliers;