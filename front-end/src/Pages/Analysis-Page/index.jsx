import React, {Component} from 'react';
import {connect} from 'react-redux';

import Header from '../../Components/Header';
import AnalysisHeader from '../../Components/AnalysisHeader';
import AnalysisMap from '../../Containers/Analysis-Map';
import DataVisuals from '../../Containers/Data-Visuals';
//import SearchBar from '../../Containers/Search-Bar';
import SuggestedCrops from '../../Containers/Suggested-Crops';
// import SuggestedSuppliers from '../../Containers/Suggested-Sups';

import './styles.css';

class AnalysisPage extends Component {
  constructor(props) {
    super(props);
  }
  render(){
    return (
      <div id="analysis-page">
        <Header/>
        <AnalysisHeader/>

        <div id="body-analysis">
          <div id="right-side-analysis-page">
            <SuggestedCrops/>
            <DataVisuals/>
          </div>
          <AnalysisMap/>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    loggedIn: state.users.loggedIn
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    }
}

export default  connect(
  mapStateToProps,
  mapDispatchToProps
)(AnalysisPage);