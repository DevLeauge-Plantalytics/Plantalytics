import React, {Component} from 'react';
class SuggestedCrops extends Component {
  constructor(props) {
    super(props);
  }
  render(){
    return (
      <div id="crop-list-container">
        <ul id="crop-list">
        <li className="crop">Crop1</li>
        <li className="crop">Crop2</li>
        <li className="crop">Crop3</li>
        </ul>
      </div>
    )
  }
}
export default SuggestedCrops;