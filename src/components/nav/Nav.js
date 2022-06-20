import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav>
      <Link to='/'>Home</Link>
      <Link to='shop'>Shop</Link>
      <Link to='contact'>Contact</Link>
      <button>Cart</button>
    </nav>
  );
}

export default Nav;
