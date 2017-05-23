import React, {Component} from 'react';
class LocationMap extends Component {
  constructor(props) {
    super(props);
  }
  render(){
    return (
      <div id="location-map">
        <img src="map"/>
        <input type="text"/>
        <button>Go!</button>
      </div>
    )
  }
}
export default LocationMap;