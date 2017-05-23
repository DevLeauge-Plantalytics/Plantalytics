import React, {Component} from 'react';
class LocationItem extends Component {
  constructor(props) {
    super(props);
  }
  render(){
    return (
      <div id="saved-location-list">
        <button>Add1</button>
        <ul>
          <li className="location-item">Location1<li>
          <li className="location-item">Location2<li>
          <li className="location-item">Location3<li>
        </ul>
      </div>
    )
  }
}
export default LocationItem;