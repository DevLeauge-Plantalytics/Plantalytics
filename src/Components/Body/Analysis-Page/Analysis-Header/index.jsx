import React, {Component} from 'react';
class AnalysisHeader extends Component {
  constructor(props) {
    super(props);
  }
  render(){
    return (
      <div id="analysis-header">
        <button id="find-sup">Find A Supplier</button>
        <button id="share-save">Share/Save</button>
      </div>
    )
  }
}
export default AnalysisHeader;