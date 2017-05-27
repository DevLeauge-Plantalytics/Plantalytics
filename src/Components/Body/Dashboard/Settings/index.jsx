import React, {Component} from 'react';
class Settings extends Component {
  constructor(props) {
    super(props);
    this.title = 'No-Warning'
  }
  render(){
    return (
      <div>
        <button id="settings-edit">Settings / Edit</button>
      </div>
    )
  }
}
export default Settings;