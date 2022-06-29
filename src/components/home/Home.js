import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';

function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.home_heading}>Audiophonics</h1>
      <p className={styles.home_description}>
        Get quality audio products at the best prices
      </p>
      <button className={styles.home_shop_btn}>
        <Link to='shop'>Shop</Link>
      </button>

      {/* {console.log('Home has rendered...')} */}
    </div>
  );
}

export default Home;
