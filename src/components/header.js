import React from 'react';

import {NavLink} from 'react-router-dom';

export const Header = () => (
  <header>
    <h1>Expensify App</h1>
    <nav>
      <ul>
        <li><NavLink exact to='/' activeClassName="is-active">Home</NavLink></li>
        <li><NavLink to='/create' activeClassName="is-active">Add</NavLink></li>
        <li><NavLink to='/edit' activeClassName="is-active">Edit</NavLink></li>
        <li><NavLink to='/help' activeClassName="is-active">Help</NavLink></li>
      </ul>
    </nav>
  </header>
);
