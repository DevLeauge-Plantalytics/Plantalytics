import React, {Component} from 'react';

class LocInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      address: "",
    };
  }

  latlong(address){
    return fetch(`/localisation/${address}`, {
        credentials: 'include',
      })
      .then( res => res.json())
      .catch(err => {
        console.log(err);
        throw err;
      })
      .then( location => {
        let latitude = location[0].latitude;
        let longitude = location[0].longitude;
      })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.latlong(this.state.address);
  }

  handleChange = (event) => {
    event.preventDefault();
    this.setState({[event.target.name]: event.target.value})
  }

  render(){
    return (
      <form id="loc-input" onSubmit={this.handleSubmit}>
        <h1 id="all-good-things">ALL GOOD THINGS GROWN, START AT HOME.</h1>

        <input
          id="location-input"
          type="text"
          placeholder="Enter the address where you'll plant change"
          value={this.state.address}
          onChange={this.handleChange}
          name="address"
        required/>

        <button type="submit">Search</button>
      </form>
    )
  }
}
export default LocInput;