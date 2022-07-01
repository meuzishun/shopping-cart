import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Contact.module.css';

function Contact() {
  return (
    <div>
      <div className={styles.container}>
        <a
          target='_blank'
          href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'
          rel='noreferrer'
        >
          <span
            className='iconify'
            data-id='icon'
            data-icon='mdi-facebook'
          ></span>
        </a>
        <a
          target='_blank'
          href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'
          rel='noreferrer'
        >
          <span
            className='iconify'
            data-id='icon'
            data-icon='mdi-linkedin'
          ></span>
        </a>
        <a
          target='_blank'
          href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'
          rel='noreferrer'
        >
          <span
            className='iconify'
            data-id='icon'
            data-icon='mdi-twitter'
          ></span>
        </a>
        <a
          target='_blank'
          href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'
          rel='noreferrer'
        >
          <span
            className='iconify'
            data-id='icon'
            data-icon='mdi-youtube'
          ></span>
        </a>
      </div>
      {/* {console.log('Contact has rendered...')} */}
    </div>
  );
}

export default Contact;
