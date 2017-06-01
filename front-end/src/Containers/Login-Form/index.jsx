import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import {signIn} from '../../Actions';

class LoginForm extends Component {
  constructor(props){
    super(props);

    this.state = {
      username: "",
      password: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleUsernameChange = (event) => {
    this.setState({ username : event.target.value });
  }

  handlePasswordChange = (event) => {
    this.setState({ password : event.target.value });
  }
  reset() {
    this.setState({
      username: "",
      password: ""
    });
  }
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.signIn(this.state);
  }


  render(){
    if (this.props.loggedIn) {
      this.props.history.push('/home');
    }
    return (
        <form id="Login" onSubmit={this.handleSubmit}>
          <input className="login-form-info" type="text" placeholder="Username" onChange={this.handleUsernameChange} value={this.state.username} />
          <input className="login-form-info" type="password" placeholder="Password " onChange={this.handlePasswordChange} value={this.state.password} />
          <button id="login-form-btn" type="submit">Log In</button>
        </form>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    loggedIn: state.users.loggedIn
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    signIn: (user) => {
      dispatch(signIn(user))
    }
  }
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm));