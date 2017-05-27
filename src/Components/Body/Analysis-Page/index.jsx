import React, {Component} from 'react';

import Header from '../../Header';
import AnalysisHeader from './Analysis-Header';
import AnalysisMap from './Analysis-Map';
import DataVisuals from './Data-Visuals';
//import SearchBar from './Search-Bar';
import SuggestedCrops from './Suggested-Crops';
import SuggestedSuppliers from './Suggested-Sups';

import './styles.css';

class AnalysisPage extends Component {
  constructor(props) {
    super(props);
    this.title = 'No-Warning'
  }
  render(){
    return (
      <div id="analysis-page">
        <Header/>
        <AnalysisHeader/>
        <div id="body-analysis">
          <div id="right-side-analysis-page">
            <div id="crops-supplier-column">
              <SuggestedCrops/>
              <SuggestedSuppliers/>
            </div>
            <DataVisuals/>
          </div>
          <div id="left-side-analysis=page">
            <AnalysisMap/>
          </div>
        </div>
      </div>
    )
  }
}
export default AnalysisPage;