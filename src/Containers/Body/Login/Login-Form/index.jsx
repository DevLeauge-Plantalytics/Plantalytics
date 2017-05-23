import React, {Component} from 'react';
import {connect} from 'react-redux';

// import SocialLogin from './Social-Login'
// import SignUpBtn from './Sign-Up-Btn'

class Login extends Component {
  constructor(props) {
    super(props);
  }

  render(){
    return (
      <div id="Login">
        <form id="login-form">
          <input type="text" placeholder="Email Address"/>
          <input type="password" placeholder="Password"/>
          <button type="submit">Sign In</button>
        </form>
      </div>
    )
  }
}


export default Login;