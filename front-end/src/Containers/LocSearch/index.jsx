/*jshint esversion: 6*/
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getDataByAddress} from '../../Actions';
import {withRouter} from 'react-router'

class LocSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      address: "",
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem('addressSearched', this.state.address);
    this.props.getDataByAddress(this.state.address)
      .then(data => {
        if(data.info !== undefined) {
          this.props.history.push('/location')
        }
      })
  }

  handleChange = (event) => {
    event.preventDefault();
    this.setState({[event.target.name]: event.target.value});
  }

  render(){
    return (
      <form id="loc-search" onSubmit={this.handleSubmit}>
        <input
          id="location-input"
          type="text"
          placeholder="Enter a new address"
          value={this.state.address}
          onChange={this.handleChange}
          name="address"
        required/>
        <button id="Search-Button" type="submit">Search</button>
      </form>
    )
  }
}

const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = dispatch => {
  return {
    getDataByAddress: address => dispatch(getDataByAddress(address))
  }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LocSearch))