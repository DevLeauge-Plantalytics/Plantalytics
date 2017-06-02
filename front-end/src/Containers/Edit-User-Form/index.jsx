import React, {Component} from 'react';

class UserEditForm extends Component {
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
  }

  editUser(user){
    console.log(user);
    if (user.username !== "" && user.firstName !== "" && user.lastName !== "" && user.email !== "" && user.password !== "" && user.address !== "" && user.zipcode !== "") {
        this.props.addUser(user);
        this.setState(
          {
            username: "",
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            address: "",
            zipcode: ""
          }
        );
  }
}

  handleSubmit(event) {
    event.preventDefault();
    // this.editUser(this.state); <-- CHECK ACTION NAME HERE
  }
  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
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
        <input type="text" name="username" placeholder="Username" onChange={this.handleChange}/>
        <br/>
        <input type="text" name="firstName" placeholder="First Name" onChange={this.handleChange}/>
        <br/>
        <input type="text" name="lastName" placeholder="Last Name" onChange={this.handleChange}/>
        <br/>
        <input type="text" name="email" placeholder="Email" onChange={this.handleChange}/>
        <br/>
        <input type="password" name="password" placeholder="Password" onChange={this.handleChange}/>
        <br/>
        <input type="text" name="address" placeholder="Home Address" onChange={this.handleChange}/>
        <br/>
        <input type="text" name="zipcode" placeholder="Zipcode" onChange={this.handleChange}/>
        <br/>
        <input type="checkbox" onClick={this.handleSupplierChange}/>I want to be a supplier!
        <br/>
        <button type="save-changes">Save Changes</button>
      </form>
    )
  }
}
export default UserEditForm;