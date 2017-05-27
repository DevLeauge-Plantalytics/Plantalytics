import React, {Component} from 'react';
class PlantListing extends Component {
  constructor(props) {
    super(props);
    this.title = 'No-Warning'
  }
  render(){
    return (
      <div id="sup-plant-listing">
        <h2>Plants that I have...</h2>
        <ul>
          <li className="plant-inventory">Plant1</li>
          <li className="plant-inventory">Plant2</li>
          <li className="plant-inventory">Plant3</li>
        </ul>
      </div>
    )
  }
}
export default PlantListing;