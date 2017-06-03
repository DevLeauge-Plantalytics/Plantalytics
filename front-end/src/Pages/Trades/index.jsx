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
        <h1 id="quotations-feed-title">List of trades</h1>
          { this.props.completed
            .map( trade =>  <div>

                <h1> {trade.id} </h1>

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