import React from 'react';
import Nav from '../nav/Nav';

function Header(props) {
  const { itemCount } = props;
  return (
    <div>
      <h1>logo</h1>
      <Nav itemCount={itemCount} />
      {console.log('Header has rendered...')}
    </div>
  );
}

export default Header;
