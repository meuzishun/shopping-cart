import React from 'react';
import { Link } from 'react-router-dom';

function Nav(props) {
  const { itemCount } = props;

  return (
    <nav>
      <Link to='/'>home</Link>
      <Link to='shop'>shop</Link>
      <Link to='contact'>contact</Link>
      <button>cart ({itemCount})</button>
    </nav>
  );
}

export default Nav;
