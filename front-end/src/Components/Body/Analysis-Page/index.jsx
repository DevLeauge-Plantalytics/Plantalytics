import React, {Component} from 'react';
import {connect} from 'react-redux';

import Header from '../../Header';
import AnalysisHeader from './Analysis-Header';
import AnalysisMap from './Analysis-Map';
import DataVisuals from './Data-Visuals';
//import SearchBar from './Search-Bar';
import SuggestedCrops from './Suggested-Crops';
// import SuggestedSuppliers from './Suggested-Sups';

import './styles.css';

class AnalysisPage extends Component {
  constructor(props) {
    super(props);
  }
  render(){
    return (
      <div id="analysis-page">
        {this.props.loggedIn &&
          <p> You are logged in as {localStorage.username}</p>
        }
        {!this.props.loggedIn &&
          <p> You are currently not logged in</p>
        }
        <Header/>
        <AnalysisHeader/>
        <div id="body-analysis">
          <div id="right-side-analysis-page">
            <div id="crops-supplier-column">
              <SuggestedCrops/>
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