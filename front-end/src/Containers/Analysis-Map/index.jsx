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
  getProfile(id) {
    if (id == localStorage.id) {
      return `/myprofile`;
    } else {
      return `/profile/${id}`;
    }
  }
  render() {
    const {users} = this.props;
    return (
      <GoogleMapReact
        bootstrapURLKeys={{key: GOOGLE_MAP_KEY}}
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}
      >
      {users.map(user=> (
        <Link
        to={this.getProfile(user.id)}
        lat={user.latitude}
        lng={user.longitude}
        >
        <div
          className="mapUserMarkers"
          text={user.username}
          onClick={this.getProfile}
        ></div></Link>
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