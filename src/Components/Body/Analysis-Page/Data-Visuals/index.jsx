import React, {Component} from 'react';
class DataVisuals extends Component {
  constructor(props) {
    super(props);
  }
  render(){
    return (
      <div id="data-visuals">
        <ul>
          <li class="data-visual">Data1</li>
          <li class="data-visual">Data2</li>
          <li class="data-visual">Data3</li>
        </ul>
      </div>
    )
  }
}
export default DataVisuals;