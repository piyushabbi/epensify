import React from 'react';

import "../styles/partials/_header.scss";

const Header = (props) => {
  return (
    <header>
      <div className="container">
        <h1>{ props.title }</h1>
      </div>
    </header>
  )
}

export default Header
