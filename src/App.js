import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Con4 from './connect4'

class App extends Component {
  
  render() {
    let contstyle = {
      width:"700px",
      height:"800px",
      backgroundColor:"pink",
      margin:"auto",

    }
    return (
      <div className="App">
              <div className="headinfo">
            <button onClick={()=>{window.location.reload()}}>restart</button>
        </div>
        <div className="container" style={contstyle}>
          <Con4>{console.log()}</Con4>
        </div>
      </div>
    );
  }
}

export default App;
