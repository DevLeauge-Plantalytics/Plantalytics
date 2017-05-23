import React, {Component} from 'react';

import LocationCrops from './Loc-Crops';
import Messages from './Messages';
import Newsfeed from './Newsfeed';
import ProfilePic from './Profile-Pic';
import Settings from './Settings';
import UserNav from './User-Nav';
<<<<<<< HEAD
import Header from '../../Header';

=======
import Header from '../Header/index';
import {getUser} from '../../../Actions';
>>>>>>> bda3030344e904a79f2d382725ec7f7ddcb20eaa
class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.getUser = this.getUser.bind(this);
  }
  getUser(user){
    this.props.getUser(user);
  }

  render(){
    return (
      <div id="dashboard">
        <Header/>
        <h1>User Name</h1>
        <UserNav/>
        <ProfilePic/>
        <Settings/>
        <LocationCrops/>
        <Newsfeed/>
        <Messages/>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    state
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getUser: id => {
      dispatch(getUser(id))
    }
  }
}

const ConnectedDashboard = connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);

export default ConnectedDashboard;
