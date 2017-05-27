import React, {Component} from 'react';
class LocationCrops extends Component {
  constructor(props) {
    super(props);
    this.title = 'No-Warning'
  }
  render(){
    return (
      <div id="loc-crops-list">
        <button id="view-your-crops"> View My Crops</button>
      </div>
    )
  }
}
export default LocationCrops;