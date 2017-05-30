import React, {Component} from 'react';
import {connect} from 'react-redux';
import HomeHeader from './Home-Header';
import HomeDescrip from './Description';
import LocInput from './Location-Input';
import HomeFooter from './Home-Footer';
import './styles.css';

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
    <div id="home-page">
      <HomeHeader/>
      <LocInput/>
      <HomeDescrip/>
      <HomeFooter/>
    </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    // plants: state.plants
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
  //   // ___: ___ => {
  //   //   dispatch(___(___))
  //   // }
  }
}

const ConnectedBoard = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default ConnectedBoard;
