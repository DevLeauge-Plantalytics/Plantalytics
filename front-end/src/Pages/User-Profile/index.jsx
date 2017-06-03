import React, {Component} from 'react';
import {connect} from 'react-redux';
import Header from '../../Components/Header'
import UserAvatar from '../../Components/UserAvatar';
import YourUserInfo from '../../Components/YourUserInfo';
import TheirUserInfo from '../../Components/TheirUserInfo';
import UserNav from '../../Components/UserNav';
import UserMap from '../../Containers/Analysis-Map';
import {getUserById} from '../../API';
import {getUser} from '../../Actions';
import ReqButton from '../../Components/ReqButton';
import './styles.css';

class UserProfile extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.title = 'No-Warning'
  }
  componentWillMount() {
    localStorage.reqId = window.location.pathname.slice(9);
    this.props.getUser(localStorage.reqId);
  }

  render(){
    if (this.props.singleUser.id == localStorage.id) {
      return (
        <div id="user-profile">
          <Header/>
          <UserNav/>
          <div id="analysis-map">
            <UserMap/>
          </div>
          <UserAvatar user={this.props.singleUser}/>
          <YourUserInfo user={this.props.singleUser}/>
        </div>
      )
    } else {
      return (
        <div id="user-profile">
          <Header/>
          <UserNav/>
          <div id="analysis-map">
            <ReqButton user={this.props.singleUser}/>
          </div>
          <UserAvatar user={this.props.singleUser}/>
          <TheirUserInfo user={this.props.singleUser}/>
        </div>
      )
    }
  }
}

const mapStateToProps = (state) => {
  return {
    singleUser: state.users.singleUser
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getUser: id => {
      dispatch(getUser(id))
    }
  }
}

const ConnectedProfile = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfile);

export default ConnectedProfile;