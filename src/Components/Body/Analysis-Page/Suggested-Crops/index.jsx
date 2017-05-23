import React, {Component} from 'react';
class SuggestedCrops extends Component {
  constructor(props) {
    super(props);
  }
  render(){
    return (
      <div id="suggested-crops">
        <ul>
        <li>Crop1</li>
        <li>Crop2</li>
        <li>Crop3</li>
        </ul>
      </div>
    )
  }
}
export default SuggestedCrops;