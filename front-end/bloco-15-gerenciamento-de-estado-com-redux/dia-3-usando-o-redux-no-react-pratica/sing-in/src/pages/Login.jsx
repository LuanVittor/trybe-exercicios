import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { loaded } from '../redux/actions/actions';

 class Login extends Component {
  constructor() {
    super();
    this.state = {
      login: false,
      logado: true,
    }
  }
  render() {
    const { login, logado } = this.state;
    const { login2 } = this.props;
    if (login) { 
    return <Redirect to="/clients" />
    }
    return (
      <div>
        <h1>Faca seu login</h1>
        <form>
          <input type="email" />
          <input type="password" />
          <button type="button" onClick={() => {
            login2(logado)
            return this.setState({ login: true });
          }}>Login</button>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  login2: (payload) => dispatch(loaded(payload))
})

export default connect(null, mapDispatchToProps)(Login);
