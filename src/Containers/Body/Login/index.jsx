import React, {Component} from 'react';
import {connect} from 'react-redux';
import LoginForm from './Login-Form';
import SignUpBtn from './Sign-Up-Btn';
import SocialLogin from './Social-Login';
import {signIn} from '../../../Actions';
import './styles.css';
class Login extends Component {
  constructor(props) {
    super(props);
    this.signIn = this.signIn.bind(this);
  }
  signIn(user){
    this.props.signIn(user);
  }
  render(){
    return (
      <div id="login-page">
        <SocialLogin/>
        <LoginForm signIn={this.signIn}/>
        <SignUpBtn/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    loggedIn: state.users.loggedIn,
    username: state.users.username
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    signIn: (user) => {
      dispatch(signIn(user))
    }
  }
}

const ConnectedLogin = connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);

export default ConnectedLogin;