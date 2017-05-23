import React, {Component} from 'react';
class LocationCrops extends Component {
  constructor(props) {
    super(props);
  }
  render(){
    return (
      <div id="loc-crops-list">
        <div id="user-locations">
          <ul>
            <li>Location1</li>
            <li>Location2</li>
            <li>Location3</li>
          </ul>
        </div>
        <div id="user-crops">
          <ul>
            <li>Crop1</li>
            <li>Crop2</li>
            <li>Crop3</li>
          </ul>
        </div>
      </div>
    )
  }
}
export default LocationCrops;