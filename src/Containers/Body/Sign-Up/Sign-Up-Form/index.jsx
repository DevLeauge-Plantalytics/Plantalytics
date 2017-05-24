import React, {Component} from 'react';

class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      address: "",
      zipcode: "",
      supplier: false,
      agreed: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
    this.handleLastNameChange = this.handleLastNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleAddressChange = this.handleAddressChange.bind(this);
    this.handleZipcodeChange = this.handleZipcodeChange.bind(this);
    this.handleSupplierChange = this.handleSupplierChange.bind(this);
    this.handleAgreedChange = this.handleAgreedChange.bind(this);
  }
  addUser(user){
    if (user.username !== "" && user.firstname !== "" && user.lastname !== "" && user.email !== "" && user.password !== "" && user.address !== "" && user.zipcode !== "") {
      if (user.agreed === true) {
        this.props.addUser(user);
        this.setState({username: "", firstname: "", lastname: "", email: "",password: "", address: "", zipcode: "", supplier: false, agreed: false});
      } else {
        alert('Please accept the terms of aggreement');
      }
    } else {
      alert('Fill out all fields please');
    }
  }
  handleSubmit(event) {
    event.preventDefault();
    this.addUser(this.state);
  }
  handleUsernameChange(event) {
    this.setState({username: event.target.value});
  }
  handleFirstNameChange(event) {
    this.setState({firstname: event.target.value});
  }
  handleLastNameChange(event) {
    this.setState({lastname: event.target.value});
  }
  handleEmailChange(event) {
    this.setState({email: event.target.value});
  }
  handlePasswordChange(event) {
    this.setState({password: event.target.value});
  }
  handleAddressChange(event) {
    this.setState({address: event.target.value});
  }
  handleZipcodeChange(event) {
    this.setState({zipcode: event.target.value});
  }
  handleSupplierChange(event) {
    if (this.state.supplier === false) {
      this.setState({supplier: true});
    } else if (this.state.supplier === true) {
      this.setState({supplier: false});
    }
  }
  handleAgreedChange(event) {
    if (this.state.agreed === false) {
      this.setState({agreed: true});
    } else if (this.state.agreed === true) {
      this.setState({agreed: false});
    }
  }
  render(){
    return (
      <form id="sign-up-form" onSubmit={this.handleSubmit}>
        <input className="sign-up-info" type="text" placeholder="Username" onChange={this.handleUsernameChange}/>
        <br/>
        <input className="sign-up-info" type="text" placeholder="First Name" onChange={this.handleFirstNameChange}/>
        <br/>
        <input className="sign-up-info" type="text" placeholder="Last Name" onChange={this.handleLastNameChange}/>
        <br/>
        <input className="sign-up-info" type="text" placeholder="Email" onChange={this.handleEmailChange}/>
        <br/>
        <input className="sign-up-info" type="password" placeholder="Password" onChange={this.handlePasswordChange}/>
        <br/>
        <input className="sign-up-info" type="text" placeholder="Home Address" onChange={this.handleAddressChange}/>
        <br/>
        <input className="sign-up-info" type="text" placeholder="Zipcode" onChange={this.handleZipcodeChange}/>
        <br/>
        <input className="sign-up-check" type="checkbox" onClick={this.handleSupplierChange}/>I want to be a supplier!
        <br/>
        <input className="sign-up-check" type="checkbox" onClick={this.handleAgreedChange}/>I accept the terms of aggreement.
        <br/>
        <button id="sign-up-btn" type="submit">Sign Up</button>
      </form>
    )
  }
}
export default SignUpForm;