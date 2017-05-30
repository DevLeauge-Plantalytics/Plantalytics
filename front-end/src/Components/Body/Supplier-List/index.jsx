import React, {Component} from 'react';
import Filter from './Filter';
import Search from './Search';
import SupplierList from './Supplier-Item';
import Header from '../../Header';
import UserNav from '../../UserNav';
import './styles.css';

class SupplierListing extends Component {
  constructor(props) {
    super(props);
    this.title = 'No-Warning'
  }
  render(){
    return (
      <div id="supplier-list">
        <Header/>
        <UserNav/>
        <Search/>
        <Filter/>
        <SupplierList/>
      </div>
    );
  }
}
export default SupplierListing;