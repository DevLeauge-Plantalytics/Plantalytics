import React, {Component} from 'react';
import {connect} from 'react-redux';
import Header from '../../Header'
import UserAvatar from './UserAvatar';
import UserInfo from './UserInfo';
import UserNav from './User-Nav';
import {getUserById} from '../../../API';
import {getUser} from '../../../Actions';
import './styles.css';

class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.title = 'No-Warning'
  }
  componentWillMount() {
    getUserById()
    .then(user => {
      getUser(user);
    });
  }

  render(){
    console.error(this.props);
    return (
      <div id="user-profile">
        <Header/>
        <UserNav/>
        <UserAvatar/>
        <UserInfo/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getUser: user => {
      dispatch(getUser(user))
    }
  }
}

const ConnectedProfile = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfile);

export default ConnectedProfile;