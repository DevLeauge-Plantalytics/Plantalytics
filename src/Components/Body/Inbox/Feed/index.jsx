import React, {Component} from 'react';
import Message from '../Message';

class Feed extends Component {
  constructor(props) {
    super(props);
    this.title = 'No-Warning'
  }
  render(){
    return (
      <div id="inbox-feed">
        <ul>
          <Message/>
        </ul>
      </div>
    )
  }
}
export default Feed;