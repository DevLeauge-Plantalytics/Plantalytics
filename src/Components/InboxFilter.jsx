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
        <h3>Username</h3>
        <input type='text' value={this.state.username} onChange={this.handleChange} name="username"/>
        <button onClick = {() => this.props.filterByUsername(this.state.username)}/>
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