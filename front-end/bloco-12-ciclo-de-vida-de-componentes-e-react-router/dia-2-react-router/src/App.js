import React, { Component } from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About'
import Users from './components/Users'
import StrictAccess from './StrictAccess';

class App extends Component {
  render() {
    const user = { username: "joao", password: "1234" }
    return (
      <BrowserRouter>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/users/10">Users</Link>
        <Link to="/strict-access">Login</Link>
        <Switch>
          <Route path="/users/:id" render={(props) => <Users {...props} greetingsMessage="Good Morning" />} />
          <Route path="/about" component={About} />
          <Route exact path="/" component={Home} />
          <Route path="/strict-access" render={ () => (<StrictAccess user={user} />)}
    />

        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
