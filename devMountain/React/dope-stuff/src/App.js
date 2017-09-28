import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import router from './router';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home/home.js';
import Bio from './components/Bio/bio.js';
import Projects from './components/Projects/projects.js';
import Nav from './components/Nav/nav.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        {router}

      </div>

    );
  }
}

export default App;
