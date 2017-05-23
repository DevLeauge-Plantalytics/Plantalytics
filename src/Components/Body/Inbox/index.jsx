import React, {Component} from 'react';
import Feed from '/Feed';
import Filter from '/Filter';
import Header from '../Header/index';
class Inbox extends Component {
  constructor(props) {
    super(props);
  }
  render(){
    return (
      <div id="inbox">
        <Header/>
        <h1>Inbox</h1>
        <Feed/>
        <Filter/>
      </div>
    )
  }
}
export default Inbox;