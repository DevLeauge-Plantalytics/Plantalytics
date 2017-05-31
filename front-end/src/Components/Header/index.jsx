import React, {Component} from 'react';
import Navigation from './Navigation';
import ProfilePic from './Profile-Pic';
import './styles.css';
import {connect} from 'react-redux'
class Header extends Component {
  constructor(props) {
    super(props);
    this.title = 'No-Warning'
  }
  render(){
    return (
      <div id="header">
      {this.props.loggedIn &&
          <p> You are logged in as {localStorage.username}</p>
        }
        {!this.props.loggedIn &&
          <p> You are currently not logged in</p>
        }
        <Navigation/>
        <ProfilePic/>
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
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header)