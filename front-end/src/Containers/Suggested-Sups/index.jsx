import React, {Component} from 'react';
import MoreSuppliers from '../More-Sups'
class SuggestedSuppliers extends Component {
  constructor(props) {
    super(props);
    this.title = 'No-Warning'
  }
  render(){
    return (
      <div id="suggested-supplier">
        <div className="supplier-thumbnail">Supplier One</div>
        <div className="supplier-thumbnail">Supplier Two</div>
        <MoreSuppliers/>
      </div>
    )
  }
}
export default SuggestedSuppliers;

// <ul id="suggested-sups">
// {
//   supplier.map( ({ firstname, lastname, address, zipcode, listedCrops }) =>
//     (
//       <SupplierThumbnail
//         firstname={firstname}
//         lastname={lastname}
//         address={address}
//         zipcode={zipcode}
//         listedCrops={listedCrops}
//       />
//     )
//   )
// }
// </ul>