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
    this.props.history.push('/home')
  }

  render(){
    return (
      <div id="header">
        {this.props.loggedIn &&
          <div>
            <p id="loggedInfo"> You are logged in as {localStorage.username}</p>
            <p onClick={this.logout} className="home-header-item">&nbsp;&nbsp;&nbsp;Logout</p>
          </div>
        }
        {!this.props.loggedIn &&
          <div>
            <p id="loggedInfo"> You are currently not logged in</p>
            <Link className="home-header-link" to="/login"><p className="home-header-item">Login</p></Link>
            <p className="home-header-slash">&nbsp;/&nbsp;</p>
            <Link className="home-header-link" to="/sign-up"><p className="home-header-item">Sign-Up</p></Link>
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