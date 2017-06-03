import React, {Component} from 'react';
import {connect} from 'react-redux';
import Header from '../../Components/Header'
import UserAvatar from '../../Components/UserAvatar';
import YourUserInfo from '../../Components/YourUserInfo';
import UserNav from '../../Components/UserNav';
import UserMap from '../../Containers/Analysis-Map';
import {getUserById} from '../../API';
import {getUser} from '../../Actions';
import './styles.css';

class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.title = 'No-Warning'
  }
  componentWillMount() {
      this.props.getUser(localStorage.id);
  }

  render(){
    return (
     <div id="your-user-profile">
        <Header/>
       <UserNav/>
       <div id="analysis-map">
         <UserMap/>
       </div>
       <UserAvatar user={this.props.singleUser}/>
       <YourUserInfo user={this.props.singleUser}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    singleUser: state.users.singleUser
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getUser: id => {
      dispatch(getUser(id))
    }
  }
}

const ConnectedProfile = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfile);

export default ConnectedProfile;