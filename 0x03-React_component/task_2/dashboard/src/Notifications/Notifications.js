import React from 'react';
import './Notifications.css';
<<<<<<< HEAD
import { getLatestNotification } from '../utils/utils';
import closeIcon from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';
import PropeTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape';
=======
import * as Utils from '../utils';
import NotificationItem from './NotificationItem';
>>>>>>> 3b7f4a80dcf88677b3eaaf4a7a76a9e7afc5ad6b

class Notifications extends React.Component {
  constructor(props) {
    super(props);
    this.markAsRead = this.markAsRead.bind(this);
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  render() {
    return (
<<<<<<< HEAD
      <>
        <div className='menuItem'>
          Your notifications
        </div>
        {this.props.displayDrawer? 
            <div className="Notifications">
              <button style={{
                color: '#3a3a3a',
                fontWeight: 'bold',
                background: 'none',
                border: 'none',
                fontSize: '15px',
                position: 'absolute',
                right: '3px',
                top: '3px',
                cursor: 'pointer',
                outline: 'none',
              }}
              aria-label="Close"
              onClick={(e) => {
                console.log('Close button has been clicked');
              }}
              >
                <img src={closeIcon} alt="close icon" width="15px" />
              </button>
              {
                this.props.listNotifications.length != 0 ?
                  <p>Here is the list of notifications</p>
                : null
              }
              <ul>
                {
                  this.props.listNotifications.length == 0 ?
                    <NotificationItem type="default" value="No new notification for now" />
                  : null
                }
                {
                  this.props.listNotifications.map((val, idx)=> {
                    return <NotificationItem
                    type={val.type}
                    value={val.value}
                    html={val.html}
                    key={val.id}
                    markAsRead={this.markAsRead}
                    id={val.id}
                  />
                  })
                }
              </ul>
            </div>
          :
            null
        }
        
      </>
=======
      <React.Fragment>
        <div className="menuItems">Your notifications</div>
        {this.props.displayDrawer
          ? (
            <div className="Notifications">
              <button style={{"ariaLabel": "Close"}} onClick={console.log('Close button has been clicked')}>x</button>
              <p>Here is the list of notifications</p>
              <ul>
                <NotificationItem markAsRead={this.markAsRead} id='1' type="default" value="New course available" />
                <NotificationItem markAsRead={this.markAsRead} id='2' type="urgent" value="New resume available" />
                <NotificationItem markAsRead={this.markAsRead} id='3' type="urgent" value="" html={Utils.getLatestNotification()} />
              </ul>
            </div>
          )
        : ( <div></div> )
        }
      </React.Fragment>
>>>>>>> 3b7f4a80dcf88677b3eaaf4a7a76a9e7afc5ad6b
    );
  }
}

Notifications.defaultProps = {
<<<<<<< HEAD
  displayDrawer: false,
  listNotifications: []
};

Notifications.propTypes = {
  displayDrawer: PropeTypes.bool,
  listNotifications: PropeTypes.arrayOf(NotificationItemShape)
};
=======
  displayDrawer: false
}
>>>>>>> 3b7f4a80dcf88677b3eaaf4a7a76a9e7afc5ad6b

export default Notifications;
