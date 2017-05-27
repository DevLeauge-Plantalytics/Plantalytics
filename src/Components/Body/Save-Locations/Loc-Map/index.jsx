import React, {Component} from 'react';
class LocationMap extends Component {
  constructor(props) {
    super(props);
    this.title = 'No-Warning'
  }
  render(){
    return (
      <div id="location-map">
        <img src="map" alt="Map"/>
        <input type="text"/>
        <button>Go!</button>
      </div>
    )
  }
}
export default LocationMap;