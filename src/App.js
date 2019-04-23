import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//import con4 from './connect4'

class App extends Component {
  
  render() {
    let contstyle = {
      width:"600px",
      height:"500px",
      backgroundColor:"red",
      margin:"auto"
    }
    return (
      <div className="App">
        <div className="container" style={contstyle}>

        </div>
      </div>
    );
  }
}

export default App;
