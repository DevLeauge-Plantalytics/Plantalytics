import React, {Component} from 'react';
import Message from '../Message';

class Feed extends Component {
  constructor(props) {
    super(props);
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