import React, {Component} from 'react';
import './App.css';

const {Device} = require('twilio-client');

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      identity: '',
      status: '',
      ready: false
    }
  }
}

export default App;