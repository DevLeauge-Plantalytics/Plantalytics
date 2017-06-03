import React, {Component} from 'react';
import {connect} from 'react-redux';
import HomeHeader from './Home-Header';
import HomeDescrip from './Description';
import LocInput from './Location-Input';
import HomeFooter from './Home-Footer';
import {signIn} from '../../Actions';
import './styles.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.title = 'No-Warning';
  }
  componentDidMount() {
    console.log('hi');
    let state = {
      username: localStorage.newUserName,
      password: localStorage.newUserPass
    };
    this.props.signIn(state);
  }

render(){
  return (
    <div id="home-page" onClick={this.autoLogin}>
      <HomeHeader/>
      <LocInput/>
      <HomeDescrip/>
      <HomeFooter/>
    </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {};
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    signIn: (user) => {
      dispatch(signIn(user))
    }
  }
}

const ConnectedBoard = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default ConnectedBoard;
