import React from 'react';
import {NavLink} from 'react-router-dom';

import "../styles/partials/_header.scss";

const Header = (props) => {
  return (
    <header>
      <div className="container">
        <h1>
          <NavLink to="/">{props.title}</NavLink>
        </h1>
        <nav className="navbar navbar-default">
          <ul className="nav navbar-nav">
            <li><NavLink to="/create">Add Expense</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header;
