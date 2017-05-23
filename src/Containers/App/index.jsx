import React, {Component} from 'react';
import {connect} from 'react-redux';
// import Header from '../../Components/Header';
// import Body from '../../Components/Body';

// import {} from '../../API';
// import {} from '../../Actions';

class App extends Component {
  constructor(props) {
    super(props);
  }
  // componentWillMount() {
  //   ___()
  //   .then(___ => {
  //     this.props.___(___);
  //   });
  // }
render(){
  return (
    <div id="view">
      <h1>Plantalytics</h1>
    </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    cards: state.cards
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