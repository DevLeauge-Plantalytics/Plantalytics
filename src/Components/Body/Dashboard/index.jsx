import React, {Component} from 'react';
import LocationCrops from '/Loc-Crops';
import Messages from '/Messages';
import Newsfeed from '/Newsfeed';
import ProfilePic from '/Profile-Pic';
import Settings from '/Settings';
import UserNav from '/User-Nav';
import Header from '../Header/index';
class Dashboard extends Component {
  constructor(props) {
    super(props);
  }
  render(){
    return (
      <div id="dashboard">
        <Header/>
        <h1>User Name<h1>
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
export default Dashboard;