import React from 'react'
import { Link } from 'react-router-dom';

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <Link to="/login">Login</Link>
        <h1>Welcome to Group 8 Company</h1>
      </div>
    )
  }
}
