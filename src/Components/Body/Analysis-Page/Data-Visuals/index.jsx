import React, {Component} from 'react';
class DataVisuals extends Component {
  constructor(props) {
    super(props);
    this.title = 'No-Warning'
  }
  render(){
    return (
      <div>
        <ul id="data-visuals-list">
          <li className="data-visual"></li>
          <li className="data-visual"></li>
          <li className="data-visual"></li>
          <li className="data-visual"></li>
        </ul>
      </div>
    )
  }
}
export default DataVisuals;