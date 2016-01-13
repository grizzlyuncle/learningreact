import React, {Component} from 'react';


class InputBar extends Component {
  render(){
    return <input onChange={this.whenInputChanges}/>;
  }

  whenInputChanges() {

  }

}

export default InputBar;
