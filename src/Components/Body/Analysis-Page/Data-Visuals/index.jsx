import React, {Component} from 'react';
class DataVisuals extends Component {
  constructor(props) {
    super(props);
  }
  render(){
    return (
      <div id="data-visuals">
        <ul>
          <li className="data-visual">Data1</li>
          <li className="data-visual">Data2</li>
          <li className="data-visual">Data3</li>
        </ul>
      </div>
    )
  }
}
export default DataVisuals;