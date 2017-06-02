import React, {Component} from 'react';
import Navigation from './Navigation';
import ProfilePic from './Profile-Pic';
import './styles.css';
import {Link} from 'react-router-dom';
import {signOut} from '../../Actions';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';

class Header extends Component {
  constructor(props) {
    super(props);
    this.title = 'No-Warning';
    this.logout = this.logout.bind(this);
  }

  logout(event) {
    this.props.signOut();
    this.props.history.push('/home');
  }

  render(){
    return (
      <div id="header">
        {this.props.loggedIn &&
          <div className="analysis-nav">
            <p id="loggedInfo"> Hey again, {localStorage.username.toUpperCase()}&nbsp;&nbsp;&nbsp;&nbsp;</p>
            <p onClick={this.logout} className="analysis-nav-item">&nbsp;&nbsp;&nbsp;Logout</p>
          </div>
        }
        {!this.props.loggedIn &&
          <div className="analysis-nav">
            <p id="loggedInfo">You are currently not logged&nbsp;&nbsp;&nbsp;&nbsp;in</p>
            <Link className="analysis-nav-link" to="/sign-up"><p className="analysis-nav-item">&nbsp;&nbsp;&nbsp;Sign-Up</p></Link>
            <p className="analysis-nav-slash">&nbsp;/&nbsp;</p>
            <Link className="analysis-nav-link" to="/login"><p className="analysis-nav-item">Login</p></Link>
          </div>
        }
        <Navigation/>
        {this.props.loggedIn &&
          <ProfilePic/>
        }
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    loggedIn: state.users.loggedIn
  }
}
const mapDispatchToProps = dispatch => {
  return {
    signOut: () => {
      dispatch(signOut())
    }
  }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header))