import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addUser} from '../../Actions';

class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      firstname: "",
      lasname: "",
      email: "",
      password: "",
      confirmpass:"",
      address: "",
      zipcode: "",
      supplier: false,
      agreed: false
    };
  }
  addUser(user){
    //let confirmed = document.getElementById('confirmed');
    console.error(user);
    if (user.password === user.confirmpass) {
      if (user.agreed === true) {
        this.props.addUser(user);
      } else {
        alert('Please Accept the Terms of Aggreement');
      }
    } else {
      alert("PASSWORDS DON'T MATCH");
      this.reset('password');
    }
  }
  reset(a){
    if (a === 'password') {
      this.setState({
        password: "",
        confirmpass: ""
      });
    } else if (a === 'email') {
      this.setState({
        email: ""
      });
    }
  }
  handleSubmit = (event) => {
    event.preventDefault();
    this.addUser(this.state);
  }
  handleUsernameChange = (event) => {
    this.setState({username: event.target.value});
  }
  handleFirstNameChange = (event) => {
    this.setState({firstname: event.target.value});
  }
  handleLastNameChange = (event) => {
    this.setState({lastname: event.target.value});
  }
  handleEmailChange = (event) => {
    this.setState({email: event.target.value});
  }
  handlePasswordChange = (event) => {
    this.setState({password: event.target.value});
  }
  handleConfirmPassChange = (event) => {
    this.setState({confirmpass: event.target.value});
  }
  handleAddressChange = (event) => {
    this.setState({address: event.target.value});
  }
  handleZipcodeChange = (event) => {
    this.setState({zipcode: event.target.value});
  }
  handleSupplierChange = (event) => {
    let checkBox = document.getElementById('sup-check');
    if (this.state.supplier === false) {
      checkBox.style.backgroundColor = '#8db500';
      this.setState({supplier: true});
    } else if (this.state.supplier === true) {
      checkBox.style.backgroundColor = 'white';
      this.setState({supplier: false});
    }
  }
  handleAgreedChange = (event) => {
    let checkBox = document.getElementById('agree-check');
    if (this.state.agreed === false) {
      checkBox.style.backgroundColor = '#8db500';
      this.setState({agreed: true});
    } else if (this.state.agreed === true) {
      checkBox.style.backgroundColor = 'white';
      this.setState({agreed: false});
    }
  }
  render(){
    return (
      <form id="sign-up-form" onSubmit={this.handleSubmit}>
        <input className="sign-up-info" type="email" placeholder="Email" value={this.state.email} onChange={this.handleEmailChange} required/>
        <input className="sign-up-info" type="text" placeholder="Username" onChange={this.handleUsernameChange} required/>
        <input className="sign-up-info" type="text" placeholder="First Name" onChange={this.handleFirstNameChange} required/>
        <input className="sign-up-info" type="text" placeholder="Last Name" onChange={this.handleLastNameChange} required/>
        <input className="sign-up-info" type="password" placeholder="Password" value={this.state.password} onChange={this.handlePasswordChange} required/>
        <input className="sign-up-info" type="password" id="confirmed" placeholder="Confirm Password" value={this.state.confirmpass} onChange={this.handleConfirmPassChange} required/>
        <br/>
        <input className="sign-up-info" type="text" placeholder="ADDRESS" onChange={this.handleAddressChange} required/>
        <input className="sign-up-info" type="text" placeholder="Zipcode" onChange={this.handleZipcodeChange} required/>
        <div className="sign-up-check">
          <div id="sup-check" onClick={this.handleSupplierChange}>✔</div>
          <span id="sup-opt">I would like to be a supplier</span>
        </div>
        <br/>
        <div className="sign-up-check">
          <div id="agree-check" onClick={this.handleAgreedChange}>✔</div>
          <span id="term-accept">I agree to the Terms of Service, and to the Payment, Privacy, and Nondiscrimination Policies applicable.</span>
        </div>
        <br/>
        <button id="sign-up-btn" type="submit">Sign Up</button>
      </form>
    )
  }
}

const mapStateToProps = (state) => {
  return {};
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addUser: user => {
      dispatch(addUser(user))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUpForm);
