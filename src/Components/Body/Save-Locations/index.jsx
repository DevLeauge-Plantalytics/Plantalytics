import React, {Component} from 'react';
import LocationMap from '/Loc-Map';
import LocationItem from '/Location-Item';
import Header from '../Header/index';
class SaveLocations extends Component {
  constructor(props) {
    super(props);
  }
  render(){
    return (
      <div id="saved-locations">
        <Header/>
        <h1>Saved Locations</h1>
        <LocationItem/>
        <LocationMap/>
      </div>
    )
  }
}
export default SaveLocations;