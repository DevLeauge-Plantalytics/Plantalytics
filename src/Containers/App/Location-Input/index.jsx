import React, {Component} from 'react';
class LocInput extends Component {
  constructor(props) {
    super(props);
    this.title = 'No-Warning'
  }
  render(){
    return (
      <div id="loc-input">
        <h1 id="all-good-things">ALL GOOD THINGS GROWN, START AT HOME.</h1>
        <input id="location-input" type="text" placeholder="Enter the zip code where you'll plant change"/>
        <button id="get-started-btn">Search</button>
      </div>
    )
  }
}
export default LocInput;