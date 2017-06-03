import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import {signOut} from '../../../Actions';
import {Link} from 'react-router-dom';

class HomeHeader extends Component {
  constructor(props) {
    super(props);
    this.title = 'No-Warning';
    this.logout = this.logout.bind(this);
  }
  logout(event) {
    this.props.signOut();
  }
  autoSupp() {
    localStorage.autoSup = true;
  }
  signIn() {
    localStorage.autoSup = false;
  }
  render(){
    if (this.props.loggedIn) {
      return (
        <div id="home-header">
          <img id="home-logo" src="https://t4.rbxcdn.com/4acfddda242f2996937cfc3ec905af85"/>
          <h1 id="logo-text">PLANTALYTICS</h1>
          <p onClick={this.logout} className="home-header-item">&nbsp;&nbsp;&nbsp;Logout</p>
          <Link className="home-header-link" to="/myprofile"><p className="home-header-item">&nbsp;&nbsp;&nbsp;Profile&nbsp;&nbsp;&nbsp;</p></Link>
          <Link className="home-header-link" to="/location"><p className="home-header-item">Your Location&nbsp;&nbsp;&nbsp;</p></Link>
        </div>
      )
    } else {
      return (
        <div id="home-header">
          <img id="home-logo" src="https://t4.rbxcdn.com/4acfddda242f2996937cfc3ec905af85"/>
          <h1 id="logo-text">PLANTALYTICS</h1>
          <Link className="home-header-link" to="/login"><p className="home-header-item">Login</p></Link>
          <p className="home-header-slash">&nbsp;/&nbsp;</p>
          <Link className="home-header-link" to="/sign-up"><p className="home-header-item" onClick={this.signIn}>&nbsp;&nbsp;&nbsp;Sign-Up</p></Link>
          <Link className="home-header-link" to="/sign-up"><p className="home-header-item" onClick={this.autoSupp}>Become a Supplier&nbsp;&nbsp;&nbsp;</p></Link>
        </div>
      )
    }
  }
}
const mapStateToProps = (state) => {
  return {
    loggedIn: state.users.loggedIn
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    signOut: () => {
      dispatch(signOut())
    }
  }
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeHeader));