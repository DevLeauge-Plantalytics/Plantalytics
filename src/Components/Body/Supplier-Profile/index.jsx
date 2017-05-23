import React, {Component} from 'react';
import PlantListing from './Plant-Listing';
import SupplierAvatar from './Sup-Avatar';
import SupplierHeader from './Sup-Header';
import UserPosts from './User-Posts';
import Header from '../../Header';
class SupplierProfile extends Component {
  constructor(props) {
    super(props);
  }
  render(){
    return (
      <div id="supplier-profile">
        <Header/>
        <h1>Supplier Name</h1>
        <SupplierHeader/>
        <SupplierAvatar/>
        <UserPosts/>
        <PlantListing/>
      </div>
    )
  }
}
export default SupplierProfile;