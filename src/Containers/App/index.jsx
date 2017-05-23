import React, {Component} from 'react';
import {connect} from 'react-redux';
// import Header from '../../Components/Header/index.jsx';
import SignUpForm from '../../Components/Body/Sign-Up/index.jsx';
// import ___ from '../../Components/___/index.js';
// import ___ from '../../Components/___/index.js';
// import ___ from '../../Containers/___/index.js';
// import ___ from '../../Containers/___/index.js';
// import ___ from '../../Containers/___/index.js';
import {postUser} from '../../API';
import {addUser} from '../../Actions';

class App extends Component {
  constructor(props) {
    super(props);
    this.addUser = this.addUser.bind(this);
  }
  // componentWillMount() {
  //   ___()
  //   .then(___ => {
  //     this.props.___(___);
  //   });
  // }
addUser(user){
  postUser(JSON.stringify(user))
  .then(user => {
    this.props.addUser(user);
  });
}
render(){
  return (
    <div id="view">
      <h1>Plantalytics</h1>
      <SignUpForm addUser={this.addUser}/>
    </div>
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
    addUser: user => {
      dispatch(addUser(user))
    }
  }
}

const ConnectedBoard = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default ConnectedBoard;