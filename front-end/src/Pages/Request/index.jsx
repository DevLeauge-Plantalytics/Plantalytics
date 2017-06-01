import { connect } from 'react-redux';
import React, {Component} from 'react';
import {loadProducts, makeRequest, updateArrayRequest, updateQuantRequest, sendMessage} from '../../Actions';
import {withRouter} from 'react-router';
import './styles.css';

class Requests extends Component {

  constructor(props) {
    super(props);
    this.state = {
      buyer: Number(localStorage.id),
      supplier: 2,
      delivery: "",
    };
  }

  componentWillMount(){
    this.props.loadProducts(2);
  }

  addRequest = (body) => {
    this.props.makeRequest(body);
    this.props.sendMessage
    this.props.history.push('/profile');
  }

  handleSubmit = (event) => {
    event.preventDefault();

    this.addRequest({
      "buyer": this.state.buyer,
      "supplier": this.state.supplier,
      "delivery": this.state.delivery,
      "request_products": this.props.productsS.filter( x => { return x.selected }),
      "offered_products": this.props.productsR.filter( x => { return x.selected })
    })
  }

  handleChange = (event) => {
    event.preventDefault();
    this.props.updateQuantRequest(event.target.id, event.target.value);
  }

  handleCheck = (event) => {
    if(event.target.checked){
      return this.props.updateArrayRequest(Number(event.target.value),true);
    }
    return this.props.updateArrayRequest(Number(event.target.value), false);
  }

  handleDeliveryYes = (event) => {
    if(event.target.checked){
      this.setState({delivery: true})
    }
  }
  handleDeliveryNo = (event) => {
    if(event.target.checked){
      this.setState({delivery: false})
    }
  }


  render(){
    return (
      <form id="request_board" onSubmit={this.handleSubmit}>
        <h1>Welcome to the trading page</h1>
        <div id="products_display">
          <div className="productsR">
            <p> Your products </p>
            { this.props.productsR
              .map( products => <div className="displayProducts" key={products.id} >
                  <input className="checkbox" type="checkbox" name="product" value={products.id} onClick={this.handleCheck} />
                  <p>{products.name}</p>
                  <p> Quantity: </p>
                  <input className="inputQuantity" type="text" id={products.id} onChange={this.handleChange}/>
                </div> )
            }
          </div>

          <div className="productsS">
            <p> Products of the supplier</p>
            { this.props.productsS
              .map( products => <div className="displayProducts" key={products.id} >
                  <input className="checkbox" type="checkbox" name="product" value={products.id} onClick={this.handleCheck} />
                  <p>{products.name}</p>
                  <p> Quantity: </p>
                  <input className="inputQuantity" type="text" id={products.id} onChange={this.handleChange}/>
                </div> )
            }
          </div>
        </div>

        <div>
          <p>Do you need delivery ?</p>
          <div>
           <input type="checkbox" id="yes" name="DeliveryYes" value="yes" onClick={this.handleDeliveryYes}/>
           <label for ="yes">yes</label>
          </div>
          <div>
           <input type="checkbox" id="no" name="DeliveryNo" value="no" onClick={this.handleDeliveryNo} />
           <label for ="no">no</label>
          </div>
        </div>

        <button id="send_request" type="submit">Send your request</button>

      </form>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    productsR: state.products.productsR,
    productsS: state.products.productsS
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    loadProducts: (id) => {
      dispatch(loadProducts(id))
    },
    makeRequest: (body) => {
      dispatch(makeRequest(body))
    },
    updateArrayRequest: (id, bool) => {
      dispatch(updateArrayRequest(id, bool))
    },
    updateQuantRequest: (id, quantity) => {
      dispatch(updateQuantRequest(id, quantity))
    },
    sendMessage: (message) => {
      dispatch(sendMessage(message))
    }
  }
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Requests));