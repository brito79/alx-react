import React from 'react';
<<<<<<< HEAD
import './Notifications.css';
import { getLatestNotification } from '../utils/utils';
import closeIcon from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';
import PropeTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape';

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
    );
  }
}

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: []
};

Notifications.propTypes = {
  displayDrawer: PropeTypes.bool,
  listNotifications: PropeTypes.arrayOf(NotificationItemShape)
};

export default Notifications;
=======
import { shallow } from 'enzyme';
import Notifications from './Notifications';

describe('Notifications', () => {
  it('renders properly', () => {
    shallow(<Notifications />);
  });

  it('checking render', () => {
    const wrapper = shallow(<Notifications />);
    const li = wrapper.find('div');
    expect(wrapper.text()).toContain('Your notifications');
});
});

describe('display drawer', () => {
  it('display drawer is true', () => {
    const wrapper = shallow(<Notifications displayDrawer='true'/>);
    expect(wrapper.find('div.menuItems').exists()).toBeTruthy();
    expect(wrapper.find('div.Notifications').exists()).toBeTruthy();
  });
});

describe('test markAsRead method', () => {
  it('test console log', () => {
    const consoleSpy = jest.spyOn(console, 'log');

    const notif = new Notifications();
    notif.markAsRead(1);
    expect(consoleSpy).toHaveBeenCalledWith('Notification 1 has been marked as read');
  });
});
>>>>>>> 3b7f4a80dcf88677b3eaaf4a7a76a9e7afc5ad6b
