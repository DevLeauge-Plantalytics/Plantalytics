import React, {Component} from 'react';
import Filter from './Filter';
import Search from './Search';
import SupplierItemList from './Supplier-Item';
import Header from '../../Header';

class SupplierList extends Component {
  constructor(props) {
    super(props);
  }
  render(){
    return (
      <div id="supplier-list">
        <Header/>
        <h1>Suppliers</h1>
        <Search/>
        <Filter/>
        <SupplierList/>
      </div>
    )
  }
}
export default SupplierList;