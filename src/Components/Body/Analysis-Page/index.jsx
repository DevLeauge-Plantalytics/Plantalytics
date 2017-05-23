import React, {Component} from 'react';
import AnalysisHeader from '/Analysis-Header';
import AnalysisMap from '/Analysis-Map';
import DataVisuals from '/Data-Visuals';
import MoreSuppliers from '/More-Sups';
import SearchBar from '/Search-Bar';
import SuggestedCrops from '/Suggested-Crops';
import SuggestedSuppliers from '/Suggested-Sups';
import Header from '../Header/index';
class AnalysisPage extends Component {
  constructor(props) {
    super(props);
  }
  render(){
    return (
      <div id="analysis-page">
        <Header/>
        <AnalysisHeader/>
        <AnalysisMap/>
        <DataVisuals/>
        <MoreSuppliers/>
        <SearchBar/>
        <SuggestedCrops/>
        <SuggestedSupplier/>
      </div>
    )
  }
}
export default AnalysisPage;