import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Nav.module.css';

function Nav(props) {
  const { itemCount, toggleCartView } = props;

  return (
    <nav className={styles.nav}>
      <Link to='/'>home</Link>
      <Link to='shop'>shop</Link>
      <Link to='contact'>contact</Link>
      {/* <button onClick={toggleCartView}>cart ({itemCount})</button> */}
      <button onClick={toggleCartView}>
        <span className='iconify' data-id='cart' data-icon='mdi-cart'></span> (
        {itemCount})
      </button>
    </nav>
  );
}

export default Nav;
