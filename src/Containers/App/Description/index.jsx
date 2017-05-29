import React, {Component} from 'react';
class HomeDescrip extends Component {
  constructor(props) {
    super(props);
    this.title = 'No-Warning'
  }
  render(){
    return (
      <div id="home-descrip">
        <h1 id="the-byf">Plantalytics is for the Backyard-Farmer.</h1>
        <div id="hyper-local-right">
          <h2 id="hyper-local">All the information, community, and support you need to eat hyper-local!</h2>
        </div>
      </div>
    )
  }
}
export default HomeDescrip;