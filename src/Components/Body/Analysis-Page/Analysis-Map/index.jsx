import React, {Component} from 'react';
import SearchBar from '../Search-Bar';

class AnalysisMap extends Component {
  constructor(props) {
    super(props);
  }
  render(){
    return (
      <div id="analysis-map">
        <SearchBar/>
      </div>
    )
  }
}
export default AnalysisMap;