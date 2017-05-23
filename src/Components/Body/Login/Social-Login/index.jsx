import React, {Component} from 'react';
class SocialLogin extends Component {
  constructor(props) {
    super(props);
  }
  render(){
    return (
      <div id="social-login">
        <button id="facebook-login">Facebook Login</button>
        <button id="google-login">Google Login</button>
      </div>
    )
  }
}
export default SocialLogin;