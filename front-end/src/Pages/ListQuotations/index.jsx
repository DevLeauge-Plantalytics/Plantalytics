import { connect } from 'react-redux';
import React, {Component} from 'react';
import {loadRequestsForQuotations} from '../../Actions';
import {withRouter} from 'react-router';
import {Link} from 'react-router-dom';
import EachRequest from '../../Containers/EachRequest/index.jsx';
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
        <Link to='/myprofile'><p className="profileLink">Profile</p></Link>
        <h1 id="quotations-feed-title">List of quotations</h1>
          { this.props.quotations
            .map( request =>  <EachRequest request={request} />)
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