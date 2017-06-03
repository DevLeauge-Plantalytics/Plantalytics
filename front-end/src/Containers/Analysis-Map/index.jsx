import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import {GOOGLE_MAP_KEY} from '../../keys';
import {connect} from 'react-redux';
import {loadUsers, getUserInfo} from '../../Actions';
import {Link} from 'react-router-dom';
import {withRouter} from 'react-router'

class Map extends Component {

  static defaultProps = {
    center: {lat: 21.4389, lng: -157.95},
    zoom: 10
  };

  componentWillMount() {
    this.props.loadUsers();
    this.props.getUserInfo(this.props.address)
  }

  theyProfile(user) {
    // return () => {
    //   // console.log(this);
    //   // console.log(user);
    //   // this.props.history.push(`/profile/${user.id}`)
    // }
    this.props.history.push('/profile/1');
  }
  render() {
    const {users} = this.props;
    console.log(this.props)
    return (
      <GoogleMapReact
        bootstrapURLKeys={{key: GOOGLE_MAP_KEY}}
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}
      >
      {users.map(user=> (
        <div
        lat={user.latitude}
        lng={user.longitude}
        id={user.id}
        key={user.id}
        >
        <div
          className="mapUserMarkers"
          onClick={this.theyProfile.bind(this)}
          >
        </div></div>
      ))}

      </GoogleMapReact>
    );
  }
}

const mapStateToProps = state => ({
  users: state.users.users,
  address: state.users.address,
  latitude: state.users.latitude,
  longitude: state.users.longitude
})

const mapDispatchToProps = dispatch => ({
  loadUsers: () => dispatch(loadUsers()),
  getUserInfo: address => dispatch(getUserInfo(address))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Map))