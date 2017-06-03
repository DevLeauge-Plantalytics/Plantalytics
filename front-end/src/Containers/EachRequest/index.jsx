import { connect } from 'react-redux';
import React, {Component} from 'react';
import Updatechanges from '../../Containers/Updatechanges';
import {addQuotation} from '../../Actions';

class EachRequest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      "updateRequest" : false
    }
  }

  renderUpdateForm = (request) => {
    if(this.state.updateRequest){
      return (<Updatechanges request={request} hideChanges={this.hideChanges} />)
    } else {
      return;
    }
  }

  makeChanges = () => {
    this.setState({"updateRequest" : true})
  }

  acceptR = () => {
    console.log("hi");
    console.log(this.props.request.id);
    this.props.addQuotation({
      "type": "trade",
      "products_price": 0,
      "delivery": false,
      "delivery_price": 0,
      "accepted": true,
      "Request_Id": this.props.request.id,
      "request_products": [],
      "offered_products": [],
    })
  }

  hideChanges = () => {
    this.setState({"updateRequest" : false})
  }

  render(){
    const {request} = this.props
    return (
      <div className="displayQuotations" key={request.id} >
        <div className="QuotationsHeader">
          <p> <span>Request ID:</span> {request.id} </p>
          <p> <span>Purchaser:</span> {request.Purchaser.username}</p>
          <p> <span>Date of the request:</span> {request.createdAt} </p>
        </div>
        <div className="QuotationsContent">
          <div className="listProdReq">
            <p> <span>Products Requested by {request.Purchaser.username}:</span></p>
            <ul> {request.interTableReq.map( products =>
                    <li>{products.Req_Prod_Requested.quantity} - {products.name}</li>
                    )
                  }
            </ul>
          </div>
          <div className="listProdOff">
            <p> <span>Products Offered in exchange:</span></p>
            <ul> {request.interTableOff.map( products =>
                    <li>{products.Req_Prod_Offered.quantity} - {products.name}</li>
                    )
                  }
            </ul>
          </div>
        </div>
        <div className="QuotationsFooter">
          <div className="Delivery">
            {request.delivery &&
              <p>The purchaser would like delivery. His home address is {request.Purchaser.address} </p>}
            {!request.delivery &&
              <p>No delivery requested</p>}
          </div>
          <div className="buttonsQuotations">
            <button type="button" onClick={this.acceptR} >Accept the request</button>
            <button type="button" onClick={this.makeChanges} >Make changes</button>
          </div>
        </div>
        {this.renderUpdateForm(request)}

    </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addQuotation: (body) => {
      dispatch(addQuotation(body))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EachRequest);