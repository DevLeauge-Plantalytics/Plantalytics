import React, {Component} from 'react';
class Newsfeed extends Component {
  constructor(props) {
    super(props);
    this.title = 'No-Warning'
  }
  render(){
    return (
      <div id="user-newsfeed">
        <h2>News</h2>
        <li>Something Happened1</li>
        <li>Something Happened2</li>
        <li>Something Happened3</li>
      </div>
    )
  }
}
export default Newsfeed;