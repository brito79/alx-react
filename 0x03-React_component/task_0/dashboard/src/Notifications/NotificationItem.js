import React from 'react';
<<<<<<< HEAD
import PropTypes from 'prop-types';

function NotificationItem({ type, html, value }) {
  return (
    value ? 
    <li
    data-notification-type={type}
    >{value}</li> 
    :
    <li
    data-notification-type={type}
    dangerouslySetInnerHTML={html}
    ></li> 
  );
}

NotificationItem.defaultProps = {
  type: 'default'
};

NotificationItem.propTypes = {
  html: PropTypes.shape({__html: PropTypes.string}),
  type: PropTypes.string.isRequired,
  value: PropTypes.string
};

export default NotificationItem;
=======
import './Notifications.css';
import PropTypes from 'prop-types';

function NotificationItems(props) {
  if (props.html) {
    return (
      <li data-notification-type={props.type} dangerouslySetInnerHTML={{ __html: props.html }}></li>
    );
  }
  return (
    <li data-notification-type={props.type}>{props.value}</li>
  )
}

NotificationItems.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string
}

NotificationItems.defaultProps = {
  type: 'default'
}

export default NotificationItems;
>>>>>>> 3b7f4a80dcf88677b3eaaf4a7a76a9e7afc5ad6b
