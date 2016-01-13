import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import InputBar from './components/input';

class App extends Component {
  constructor(props){
    super(props);

    this.state = null;
  }
  render(){
    return(
      <div>
        <InputBar />
      </div>
    );
  };

}




ReactDOM.render(
  <App />,
  document.getElementById('container')
);
