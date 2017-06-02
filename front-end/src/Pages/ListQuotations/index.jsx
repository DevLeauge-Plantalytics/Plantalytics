import { connect } from 'react-redux';
import React, {Component} from 'react';
import {loadRequestsForQuotations} from '../../Actions';
import {withRouter} from 'react-router';
import './styles.css';

class ListQuotations extends Component {

  constructor(props) {
    super(props);
  }

  componentWillMount(){
    this.props.loadRequestsForQuotations(localStorage.id);
  }

  render(){
    return (
      <div id="quotations-feed">
        <h1 id="quotations-feed-title">List of quotations</h1>
          { this.props.quotations
            .map( requests => <div className="displayQuotations" key={requests.id} >
                <div className="QuotationsHeader">
                  <p> <span>Request ID:</span> {requests.id} </p>
                  <p> <span>Purchaser:</span> {requests.Purchaser.username}</p>
                  <p> <span>Date of the request:</span> {requests.createdAt} </p>
                </div>
                <div className="QuotationsContent">
                  <div className="listProdReq">
                    <p> <span>Products Requested by {requests.Purchaser.username}:</span></p>
                    <ul> {requests.interTableReq.map( products =>
                            <li>{products.quantity} - {products.name}</li>
                            )
                          }
                    </ul>
                  </div>
                  <div className="listProdOff">
                    <p> <span>Products Offered in exchange:</span></p>
                    <ul> {requests.interTableOff.map( products =>
                            <li>{products.quantity} - {products.name}</li>
                            )
                          }
                    </ul>
                  </div>
                </div>
                <div className="QuotationsFooter">
                  <div className="Delivery">
                    {requests.delivery &&
                      <p>The purchaser would like delivery. His home address is {requests.Purchaser.address} </p>}
                    {!requests.delivery &&
                      <p>No delivery requested</p>}
                  </div>
                  <div className="buttonsQuotations">
                    <button type="button" onClick={this.acceptRequest} >Accept the request</button>
                    <button type="button" onClick={this.makeChanges} >Make changes</button>
                  </div>
                </div>
            </div> )
          }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    quotations: state.requests.requests_for_quotations,
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    loadRequestsForQuotations: (id) => {
      dispatch(loadRequestsForQuotations(id))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListQuotations);