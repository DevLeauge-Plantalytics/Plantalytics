import React, {Component} from 'react';
import Feed from './Feed';
import Filter from './Filter';
import Header from '../../Header';

class Inbox extends Component {
  constructor(props) {
    super(props);
  }
  render(){
    return (
      <div id="inbox">
        <Header/>
        <h1>Inbox</h1>
        <Filter id="filter"/>
        <Feed/>
      </div>
    )
  }
}

export default Inbox;