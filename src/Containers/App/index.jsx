import React, {Component} from 'react';
import {connect} from 'react-redux';
// import Header from '../../Components/Header/index.jsx';
// import ___ from '../../Components/___/index.js';
// import ___ from '../../Components/___/index.js';
// import ___ from '../../Containers/___/index.js';
// import ___ from '../../Containers/___/index.js';
// import ___ from '../../Containers/___/index.js';
// import {} from '../../API';
// import {} from '../../Actions';

class App extends Component {
  constructor(props) {
    super(props);
    this.title = 'No-Warning'
  }
  // componentWillMount() {
  //   ___()
  //   .then(___ => {
  //     this.props.___(___);
  //   });
  // }
render(){
  return (
    <div id="view"></div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    plants: state.plants
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    // ___: ___ => {
    //   dispatch(___(___))
    // }
  }
}

const ConnectedBoard = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default ConnectedBoard;
