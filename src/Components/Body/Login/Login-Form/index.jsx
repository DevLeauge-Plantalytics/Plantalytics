import React, {Component} from 'react';
class LoginForm extends Component {
  constructor(props) {
    super(props);
  }
  render(){
    return (
      <form id="login-form">
        <input type="text" placeholder="Email Address"/>
        <input type="password" placeholder="Password"/>
        <button type="submit">Sign In</button>
      </form>
    )
  }
}
export default LoginForm;