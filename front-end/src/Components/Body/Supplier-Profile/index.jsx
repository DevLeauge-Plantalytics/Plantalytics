import React, {Component} from 'react';
import PlantListing from './Plant-Listing';
import SupplierAvatar from './Sup-Avatar';
import SupplierHeader from './Sup-Header';
import UserPosts from './User-Posts';
import Header from '../../Header';
import UserNav from '../../UserNav';
import UserAvatar from '../../UserAvatar';
import './styles.css';
class SupplierProfile extends Component {
  constructor(props) {
    super(props);
    this.title = 'No-Warning'
  }
  render(){
    return (
      <div id="supplier-profile">
        <Header/>
        <UserNav/>
        <UserAvatar/>
        <SupplierHeader/>
        <SupplierAvatar/>
        <UserPosts/>
        <PlantListing/>
      </div>
    )
  }
}
export default SupplierProfile;