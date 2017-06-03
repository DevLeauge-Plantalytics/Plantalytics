import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addProduct, getProducts} from '../../Actions';

class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.title = 'No-Warning';

    this.state = {
      name: "",
      quantity: "",
      Owner_Id: localStorage.id
    };
    this.addCrop = this.addCrop.bind(this);
  }
  componentWillMount() {
    this.props.getProducts(localStorage.id);
  }
  handleNameChange = (event) => {
    this.setState({name: event.target.value });
  }
  handleQuantityChange = (event) => {
    this.setState({quantity: event.target.value });
  }
  addCrop(event) {
    let state = {
      name: this.state.name,
      quantity: Number(this.state.quantity),
      Owner_Id: Number(this.state.Owner_Id)
    }
    event.preventDefault();
    this.props.addProduct(state);
    this.reset();
  }
  reset() {
    this.setState({
      name: "",
      quantity: ""
    });
  }
  render(){
    console.log(this.props.products)
    return (
      <div id="add-your-crop">
        <form onSubmit={this.addCrop}>
          <input className="add-crop-info" type="text" placeholder="Crop Name" onChange={this.handleNameChange} value={this.state.name}/>
          <input className="add-crop-info" type="text" placeholder="Quantity" onChange={this.handleQuantityChange} value={this.state.quantity}/>
          <button id="add-crop-btn" type="submit">Add Crop</button>
        </form>
        <h2 id="my-crops-title">My Crops</h2>
        <ul id="my-crop-list">
          {this.props.products.map(product => (
            <li className="my-crop-item"><h3 className="my-crop-names">{product.name}</h3>, quantity: {product.quantity}</li>
          ))}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.products.products
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addProduct: body => {
      dispatch(addProduct(body))
    },
    getProducts: (id) => {
      dispatch(getProducts(id))
    }
  }
}

const ConnectedProfile = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfile);

export default ConnectedProfile;