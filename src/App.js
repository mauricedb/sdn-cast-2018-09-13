import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Joke from './Joke'

const url = "https://api.chucknorris.io/jokes/random";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        
        <h2>De SDN Cast</h2>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Joke url={url} />
      </div>
    );
  }
}

export default App;
