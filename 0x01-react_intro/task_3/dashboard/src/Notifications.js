import React from 'react';
import './Notifications.css';
import close_icon from './close-icon.png';
import { getLatestNotification } from './utils';

function Notifications() {

  const handleClick = () => {
    console.log('Close button has been clicked');
  };

  return (
    <div className='Notifications'>
      <p>Here is the list of notifications</p>
      <button style={{
        position:'absolute',
        top: '1rem',
        right: '1rem',
        background: 'transparent',
        border: 'none',
        cursor: 'pointer',
        fontSize: '1rem',

      }} onClick={handleClick} aria-label='Close'>
        <img src={close_icon} alt='close-img' width="20px" height="20px" /></button>
        <ul>
          <li data-priority="default">New course available</li>
          <li data-priority="urgent">New resume available</li>
          <li dangerouslySetInnerHTML={{__html: getLatestNotification()}}></li>
        </ul>
    </div>
  );
}

export default Notifications;