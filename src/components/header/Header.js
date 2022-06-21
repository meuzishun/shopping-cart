import React from 'react';
import Nav from '../nav/Nav';
import styles from './Header.module.css';

function Header(props) {
  const { itemCount } = props;
  return (
    <div className={styles.header}>
      <h1>logo</h1>
      <Nav itemCount={itemCount} />
      {console.log('Header has rendered...')}
    </div>
  );
}

export default Header;
