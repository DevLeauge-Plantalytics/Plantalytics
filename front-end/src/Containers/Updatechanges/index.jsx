import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addQuotation, updateQuantQuotation} from '../../Actions';
import {withRouter} from 'react-router';
import './styles.css';

class UpdateChanges extends Component {

  constructor(props) {
    super(props);
    this.state = {
      type: "",
      products_price: "",
      delivery: "",
      delivery_price: "",
      Request_Id: this.props.request.id,
    };

    this.handlePriceChange = this.handlePriceChange.bind(this);
    this.handlePriceDeliveryChange = this.handlePriceDeliveryChange.bind(this);
  }

  updateRequest = (body) => {
    console.log(body);
    this.props.addQuotation(body);
    this.props.history.push('/quotations');
  }

  handleChange = (event) => {
    event.preventDefault();
    this.props.updateQuantQuotation(this.props.request.id, event.target.id, event.target.value);
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.updateRequest({
      "type": "trade",
      "products_price": Number(this.state.products_price),
      "delivery": this.state.delivery,
      "delivery_price": Number(this.state.delivery_price),
      "accepted": true,
      "Request_Id": Number(this.props.request.id),
      "request_products": this.props.RFQ_O,
      "offered_products": this.props.RFQ_Q,
    })
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

  handlePriceChange (event) {
    this.setState({ products_price : event.target.value });
  }

  handlePriceDeliveryChange (event) {
    this.setState({ delivery_price : event.target.value });
  }

  render(){
    return (
      <form id="update_quotation_form" onSubmit={this.handleSubmit}>
        <div className="update_quotation_form_price">
          <p><span>Price for Products</span></p>
          <input className="priceQuotations" type="text" onChange={this.handlePriceChange}/>
        </div>

        <div id="update_quotation_form_delivery">
          <p><span> Delivery </span></p>
          <input type="checkbox" id="yesQuot" name="DeliveryYes" value="yes" onClick={this.handleDeliveryYes}/>
          <label for ="yes">yes</label>
          <input type="checkbox" id="noQuot" name="DeliveryNo" value="no" onClick={this.handleDeliveryNo} />
          <label for ="no">no</label>
        </div>

        <div className="update_quotation_form_price">
          <p><span>Delivery Price</span></p>
          <input className="priceDeliveryQuotations" type="text" onChange={this.handlePriceDeliveryChange}/>
        </div>

        <div className="productsQuotations">

          <div className="productsQuotationsRequested">
            <p><span>Products requested</span></p>
            { this.props.request.interTableReq
              .map( products => <div className="displayProductsQuotations" key={products.id} >
                  <p>{products.name}</p>
                  <p> Quantity: </p>
                  <input className="inputQuantity" type="text" id={products.id} onChange={this.handleChange}/>
                </div> )
              }
          </div>

          <div className="productsQuotationsOffered">
            <p><span>Products offered in exchange</span></p>
            { this.props.request.interTableOff
              .map( products => <div className="displayProductsQuotations" key={products.id} >
                  <p>{products.name}</p>
                  <p> Quantity: </p>
                  <input className="inputQuantity" type="text" id={products.id} onChange={this.handleChange}/>
                </div> )
              }
          </div>

        </div>

        <button id="send_update" type="submit">Send your offer</button>
        <button type="button" onClick={this.props.hideChanges} >Hide form</button>
      </form>
    )
  }
}

const mapStateToProps = state => {
  return {
    RFQ_O: state.requests.RFQ_prod_offered,
    RFQ_Q: state.requests.RFQ_prod_requested,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addQuotation: (body) => {
      dispatch(addQuotation(body))
    },
    updateQuantQuotation: (requestid, productid, quantity) => {
      dispatch(updateQuantQuotation(requestid, productid, quantity))
    }
  }
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(UpdateChanges));