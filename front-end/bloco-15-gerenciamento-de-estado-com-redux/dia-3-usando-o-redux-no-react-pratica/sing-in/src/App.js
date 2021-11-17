import './App.css';
import React, { Component } from 'react'
import { Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Registration from './pages/Registration';

export default class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={ Home } />
        <Route path="/login" component={ Login }/>
        <Route path="/clients" component={ Registration } />
      </div>
    )
  }
}
