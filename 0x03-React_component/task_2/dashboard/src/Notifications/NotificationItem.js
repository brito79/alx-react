import React from 'react';
<<<<<<< HEAD
import PropTypes from 'prop-types';

class NotificationItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      this.props.value ? 
      <li
      data-notification-type={this.props.type}
      onClick={() => this.props.markAsRead(this.props.id)}
      >{this.props.value}</li> 
      :
      <li
      data-notification-type={this.props.type}
      dangerouslySetInnerHTML={this.props.html}
      onClick={() => {console.log('empty func');}}
      ></li>
    );
  }
}

NotificationItem.defaultProps = {
  type: 'default',
  markAsRead: () => {console.log('empty func');},
	id: 0
};

NotificationItem.propTypes = {
  html: PropTypes.shape({__html: PropTypes.string}),
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  markAsRead: PropTypes.func,
  id: PropTypes.number
};

export default NotificationItem;
=======
import './Notifications.css';
import PropTypes from 'prop-types';

class NotificationItems extends React.Component {
  render () {
    if (this.props.html) {
      return (
        <li data-notification-type={this.props.type}
          dangerouslySetInnerHTML={{ __html: this.props.html }}
          onClick={this.props.markAsRead(this.props.id)}></li>
      );
    }
    return (
      <li data-notification-type={this.props.type}
        onClick={this.props.markAsRead(this.props.id)}>{this.props.value}
      </li>
    );
    }
  }

NotificationItems.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  markAsRead: PropTypes.func
}

NotificationItems.default = {
  type: 'default',
  markAsRead: 0
}

export default NotificationItems;
>>>>>>> 3b7f4a80dcf88677b3eaaf4a7a76a9e7afc5ad6b
