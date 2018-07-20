import React from 'react';
import './Header.css';
import "tachyons";

const Header = () => {
  return (
    <header className="App-header bg-black">
      <nav className="pa3 pa4-ns">
        <h1 className="App-title link black b f1 tc db mb3 mb4-ns yellow">Earth vs StarWars</h1>
      </nav>
    </header>
  )
}

export default Header;