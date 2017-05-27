import React, {Component} from 'react';

class AnalysisHeader extends Component {
  constructor(props) {
    super(props);
  }
  render(){
    return (
      <div id="analysis-header">
        <ul id="analysis-header-items">
          <li className="analysis-header-item">Find A Supplier</li>
          <li className="analysis-header-item">Share/Save</li>
        </ul>
      </div>
    )
  }
}
export default AnalysisHeader;