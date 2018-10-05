import React, { Component } from 'react';
import './App.css';
import { NavBar } from '../src/Components/NavBar/NavBar';
import { Profile } from './Components/Profile/Profile';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Nick's Profile</h1>
        </header>
        <NavBar />
        <Profile />    
      </div>
    );
  }
}

export default App;
