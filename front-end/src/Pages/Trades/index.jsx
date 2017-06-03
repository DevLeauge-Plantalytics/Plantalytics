import { connect } from 'react-redux';
import React, {Component} from 'react';
import {loadTradesDone} from '../../Actions';
import {Link} from 'react-router-dom';
import './styles.css';

class TradesDone extends Component {

  constructor(props) {
    super(props);

  }

  componentWillMount(){
    this.props.loadTradesDone(localStorage.id);
  }

  yourProfile() {
    return `/profile/${localStorage.id}`;
  }

  render(){
    console.log(this.props.completed);
    return (
      <div id="trades-feed">
        <Link to='/myprofile'><p className="profileLink">Profile</p></Link>
        <h1 id="trades-feed-title">List of trades</h1>
          { this.props.completed.map( trade =>  <div className="individual-trade">
              <div className="TradeHeader">
                <p> <span>Quotation id:</span> {trade.id} </p>
                <p> <span>Request id:</span> {trade.Request_Id}</p>
                <p> <span>Purchaser:</span> {trade.Contract.Purchaser.username}</p>
              </div>

              <div className="TradedProducts">
                <p> <span>Products that you will receive:</span> </p>
                {trade.Contract.interTableOff.map( prodRec =>
                  <div>
                    <p> {prodRec.name} </p>
                    <p> {prodRec.Req_Prod_Offered.quantity} </p>
                  </div>
                  )}

                <p> <span>Products that you will offer:</span> </p>
                {trade.Contract.interTableReq.map( prodOff =>
                  <div>
                    <p> {prodOff.name} </p>
                    <p> {prodOff.Req_Prod_Requested.quantity}</p>
                  </div>
                  )}
              </div>

              </div>)
          }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    completed: state.quotations.completed
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    loadTradesDone: (id) => {
      dispatch(loadTradesDone(id))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TradesDone);