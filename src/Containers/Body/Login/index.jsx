import React, {Component} from 'react';
import LoginForm from './Login-Form';
import SignUpBtn from './Sign-Up-Btn';
import SocialLogin from './Social-Login';
class Login extends Component {
  constructor(props) {
    super(props);
  }
  render(){
    return (
      <div id="login-page">
        <SocialLogin/>
        <LoginForm/>
        <SignUpBtn/>
      </div>
    )
  }
}
export default Login;