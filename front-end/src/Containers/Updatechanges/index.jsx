import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addQuotation, updateQuantQuotation} from '../../Actions';

class UpdateChanges extends Component {

  constructor(props) {
    super(props);
  }

  updateRequest = (body) => {
    this.props.addQuotation(body);
    this.props.history.push('/quotations');
  }

  handleChange = (event) => {
    event.preventDefault();
    this.props.updateQuantQuotation(this.props.requests.id, event.target.id, event.target.value);
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.updateRequest({
      "type": "trade",
      "products_price": this.state.products_price,
      "delivery": this.state.delivery,
      "delivery_price": this.state.delivery_price,
      "accepted": true,
      "Request_Id": this.props.request.id,
      "request_products": "",
      "offered_products": "",
    })
  }

  render(){
    return (
      <form id="update_quotation_form" onSubmit={this.handleSubmit}>

        <div>
          <p>Price for Products</p>
          <input className="priceQuotations" type="text" onChange={this.handleChange}/>
        </div>

        <div>
          <p> Delivery </p>
          <input type="checkbox" id="yesQuot" name="DeliveryYes" value="yes" onClick={this.handleDeliveryYes}/>
          <label for ="yes">yes</label>
          <input type="checkbox" id="noQuot" name="DeliveryNo" value="no" onClick={this.handleDeliveryNo} />
          <label for ="no">no</label>
        </div>

        <div>
          <p>Delivery Price</p>
          <input className="priceDeliveryQuotations" type="text" onChange={this.handleChange}/>
        </div>

        <div className="productsQuotations">
          <div className="productsQuotationsRequested">
            <p> Your products </p>
            { this.props.requests.interTableReq
              .map( products => <div className="displayProductsQuotations" key={products.id} >
                  <p>{products.name}</p>
                  <p> Quantity: </p>
                  <input className="inputQuantity" type="text" id={products.id} onChange={this.handleChange}/>
                </div> )
              }
          </div>

          <div className="productsQuotationsOffered">
            <p> Your products </p>
            { this.props.requests.interTableOff
              .map( products => <div className="displayProductsQuotations" key={products.id} >
                  <p>{products.name}</p>
                  <p> Quantity: </p>
                  <input className="inputQuantity" type="text" id={products.id} onChange={this.handleChange}/>
                </div> )
              }
          </div>

        </div>

        <button id="send_update" type="submit">Send your offer</button>

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
    updateQuantQuotation: (id, quantity) => {
      dispatch(updateQuantQuotation(id, quantity))
    }
  }
}

export default  connect(
  mapStateToProps,
  mapDispatchToProps
)(UpdateChanges);