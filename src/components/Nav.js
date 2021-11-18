import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Nav extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <div className="container-fluid">
          <ul class="nav">
            <li class="nav-item">
              <Link to="/" className="nav-link text-light bg-dark">Home</Link>
            </li>
            <li class="nav-item">
              <Link to="/login" className="nav-link text-light bg-dark">Login</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Nav;


