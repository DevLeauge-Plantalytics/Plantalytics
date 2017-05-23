import React, {Component} from 'react';
class Feed extends Component {
  constructor(props) {
    super(props);
  }
  render(){
    return (
      <div id="inbox-feed">
        <ul>
          <li>Message1</li>
          <li>Message2</li>
          <li>Message3</li>
        </ul>
      </div>
    )
  }
}
export default Feed;