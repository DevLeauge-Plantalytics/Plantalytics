import React, {Component} from 'react';
class SuggestedCrops extends Component {
  constructor(props) {
    super(props);
    this.title = 'No-Warning'
  }
  render(){
    return (
      <div id="crop-list-container">
        <h2 id="crop-list-title">Suggested Crops</h2>
        <ul id="crop-list">
        <li className="crop">Ulu/Breadfruit <span className="sugst-crop-type">&nbsp;Tree</span></li>
        <li className="crop">Kalo/Taro <span className="sugst-crop-type">&nbsp;Root</span></li>
        <li className="crop">Niu/Coconut <span className="sugst-crop-type">&nbsp;Tree</span></li>
        </ul>
      </div>
    )
  }
}
export default SuggestedCrops;