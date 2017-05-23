import React, {Component} from 'react';
class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      firstName: "",
      lastName: "",
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
    console.log(user);
    if (user.username !== "" && user.firstName !== "" && user.lastName !== "" && user.email !== "" && user.password !== "" && user.address !== "" && user.zipcode !== "") {
      if (user.agreed === true) {
        this.props.addUser(user);
        this.setState({username: "", firstName: "", lastName: "", email: "",password: "", address: "", zipcode: "", supplier: false, agreed: false});
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
    this.setState({firstName: event.target.value});
  }
  handleLastNameChange(event) {
    this.setState({lastName: event.target.value});
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
        <input type="text" placeholder="Username" onChange={this.handleUsernameChange}/>
        <br/>
        <input type="text" placeholder="First Name" onChange={this.handleFirstNameChange}/>
        <br/>
        <input type="text" placeholder="Last Name" onChange={this.handleLastNameChange}/>
        <br/>
        <input type="text" placeholder="Email" onChange={this.handleEmailChange}/>
        <br/>
        <input type="password" placeholder="Password" onChange={this.handlePasswordChange}/>
        <br/>
        <input type="text" placeholder="Home Address" onChange={this.handleAddressChange}/>
        <br/>
        <input type="text" placeholder="Zipcode" onChange={this.handleZipcodeChange}/>
        <br/>
        <input type="checkbox" onClick={this.handleSupplierChange}/>I want to be a supplier!
        <br/>
        <input type="checkbox" onClick={this.handleAgreedChange}/>I accept the terms of aggreement.
        <br/>
        <button type="submit">Sign Up</button>
      </form>
    )
  }
}
export default SignUpForm;