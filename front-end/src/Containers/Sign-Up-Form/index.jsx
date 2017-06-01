import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import {addUser, signIn} from '../../Actions';

class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      confirmpass:"",
      address: "",
      latitude: "",
      longitude: "",
      zipcode: "",
      supplier: false,
      agreed: false
    };
  }

  componentDidMount() {
    if (localStorage.autoSup === "true") {
      this.handleSupplierChange();
    }
  }
  addUser = (user) => {
    if (user.password === user.confirmpass) {
      if (user.agreed === true) {
        this.props.addUser(this.state);
        this.props.history.push('/home');
      } else {
        alert('Please Accept the Terms of Aggreement');
      }
    } else {
      alert("PASSWORDS DON'T MATCH");
      this.reset();
    }
  }
  reset(){
    this.setState({
      password: "",
      confirmpass: ""
    });
  }
  handleSubmit = (event) => {
    event.preventDefault();
    this.addUser(this.state);
  }

  handleChange = (event) => {
    event.preventDefault();
    this.setState({[event.target.name]: event.target.value})
  }

  handleSupplierChange = () => {
    let checkBox = document.getElementById('sup-check');
    if (this.state.supplier === false) {
      checkBox.style.backgroundColor = '#8db500';
      this.setState({supplier: true});
    } else if (this.state.supplier === true) {
      checkBox.style.backgroundColor = 'white';
      this.setState({supplier: false});
    }
  }
  handleAgreedChange = () => {
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
        <input className="sign-up-info" type="email" placeholder="Email" value={this.state.email} onChange={this.handleChange} name="email" required/>
        <input className="sign-up-info" type="text" placeholder="Username" value={this.state.username} onChange={this.handleChange} name="username" required/>
        <input className="sign-up-info" type="text" placeholder="First Name" value={this.state.firstname} onChange={this.handleChange} name="firstname" required/>
        <input className="sign-up-info" type="text" placeholder="Last Name" value={this.state.lastname} onChange={this.handleChange} name="lastname" required/>
        <input className="sign-up-info" type="password" placeholder="Password" value={this.state.password} onChange={this.handleChange} name="password" required/>
        <input className="sign-up-info" type="password" id="confirmed" placeholder="Confirm Password" value={this.state.confirmpass} onChange={this.handleChange} name="confirmpass" required/>
        <br/>
        <input className="sign-up-info" type="text" placeholder="ADDRESS" value={this.state.address} onChange={this.handleChange} name="address" required/>
        <input className="sign-up-info" type="text" placeholder="Zipcode" value={this.state.zipcode} onChange={this.handleChange} name="zipcode" required/>
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
  return {
    loggedIn: state.users.loggedIn
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addUser: user => {
      dispatch(addUser(user))
    },
    signIn: (user) => {
      dispatch(signIn(user))
    }
  }
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUpForm));