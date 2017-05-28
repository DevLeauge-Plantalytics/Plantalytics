import React, {Component} from 'react';
class SupplierItem extends Component {
  constructor(props) {
    super(props);
    this.title = 'No-Warning'
  }
  render(){
    return (
      <div id="supplier-items-list">
        <ul id="supp-list">
          <li className="sup-list-item">
            <img className="supp-profile-picture" src="https://image.redbull.com/rbcom/010/2017-02-21/1331845943767_2/0010/1/1600/1067/1/they..jpg"></img>
            <h3 className="supp-name">THEY.</h3>
            <p className="supp-loc">Hollywood, 90210 / 2,550 Miles</p>
            <p className="plant-list-preview">Plant1, Plant2, Plant3</p>
            <p className="message-supp">Message THEY.</p>
            <p className="view-supp">View Supplier Profile</p>
          </li>
          <li className="sup-list-item">
            <img className="supp-profile-picture" src="http://nesthq.com/wp-content/uploads/2015/10/ducky1.png"></img>
            <h3 className="supp-name">Ducky</h3>
            <p className="supp-loc">Hollywood, 90210 / 2,550 Miles</p>
            <p className="plant-list-preview">Plant1, Plant2, Plant3</p>
            <p className="message-supp">Message Ducky</p>
            <p className="view-supp">View Supplier Profile</p>
          </li>
          <li className="sup-list-item">
            <img className="supp-profile-picture" src="http://www.xxlmag.com/files/2017/02/Lil-Yachty-1.jpg"></img>
            <h3 className="supp-name">Lil Yachty</h3>
            <p className="supp-loc">Hollywood, 90210 / 2,550 Miles</p>
            <p className="plant-list-preview">Plant1, Plant2, Plant3</p>
            <p className="message-supp">Message Lil Yachty</p>
            <p className="view-supp">View Supplier Profile</p>
          </li>
        </ul>
      </div>
    )
  }
}
export default SupplierItem;