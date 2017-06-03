import {connect} from 'react-redux';
import {filterByUsername} from '../Actions';
import React, {Component} from 'react';

class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: ""
    }
  }

  handleChange = (event) => {
    event.preventDefault();
    this.setState({[event.target.name]: event.target.value})
  }

  render(){
    return (
      <div id="inbox-filter">
        <h3>Filter by username: </h3>
        <input  id="inputFilter" type='text' value={this.state.username} onChange={this.handleChange} name="username"/>
        <button type="button" onClick = {() => this.props.filterByUsername(this.state.username)}>search</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {};
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    filterByUsername: (username) => {
      dispatch(filterByUsername(username))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Filter);