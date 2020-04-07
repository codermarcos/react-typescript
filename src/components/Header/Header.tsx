import React from 'react';

import 'src/components/Header/Header.css';

import logo from 'src/assets/images/logo.svg';

function Header(): JSX.Element {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
    </header>
  );
}


export default Header;
