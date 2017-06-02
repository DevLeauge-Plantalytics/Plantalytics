import { connect } from 'react-redux';
import React, {Component} from 'react';
import {loadRequests} from '../../Actions';
import {withRouter} from 'react-router';
import './styles.css';

class ListRequests extends Component {

  constructor(props) {
    super(props);
  }

  componentWillMount(){
    this.props.loadRequests(localStorage.id);
  }

  render(){
    return (
      <div id="requests-feed">
        <h1 id="requests-feed-title">List of requests</h1>
          { this.props.requests
            .map( requests => <div className="displayRequests" key={requests.id} >
                <div className="RequestsHeader">
                  <p> <span>Request ID:</span> {requests.id} </p>
                  <p> <span>Supplier:</span> {requests.Vendor.username}</p>
                  <p> <span>Date of the request:</span> {requests.createdAt} </p>
                </div>
                <div className="RequestsContent">
                  <div className="listProdReq">
                    <p> <span>Products Requested:</span> </p>
                    <ul> {requests.interTableReq.map( products =>
                            <li>{products.quantity} - {products.name}</li>
                            )
                          }
                    </ul>
                  </div>
                  <div className="listProdOff">
                    <p> <span>Products Offered: </span></p>
                    <ul> {requests.interTableOff.map( products =>
                            <li>{products.quantity} - {products.name}</li>
                            )
                          }
                    </ul>
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
    requests: state.requests.requests,
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    loadRequests: (id) => {
      dispatch(loadRequests(id))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListRequests);