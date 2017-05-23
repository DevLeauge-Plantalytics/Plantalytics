import React, {Component} from 'react';

class SupHeader extends Component {
  constructor(props) {
    super(props);
  }
  render(){
    return (
      <div id="supplier-header">
        <button id="message-supplier">Message Me!</button>
      </div>
    )
  }
}
export default SupHeader;