import React from 'react';
import Nav from '../nav/Nav';

function Header() {
  return (
    <div>
      {console.log('header rendered...')}
      <h1>Logo</h1>
      <Nav />
    </div>
  );
}

export default Header;
