import React from 'react';
import { Link } from 'react-router-dom';
import Nav from '../nav/Nav';
import styles from './Header.module.css';

function Header(props) {
  const { itemCount, toggleCartView } = props;
  return (
    <div className={styles.header}>
      <h1>
        <Link to='/'>Audiophonics</Link>
      </h1>
      <Nav itemCount={itemCount} toggleCartView={toggleCartView} />
      {/* {console.log('Header has rendered...')} */}
    </div>
  );
}

export default Header;
