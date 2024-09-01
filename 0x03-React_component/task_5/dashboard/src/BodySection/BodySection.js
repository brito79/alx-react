<<<<<<< HEAD
import React, { Component } from 'react'
import PropTypes from 'prop-types';

class BodySection extends Component {
  render() {
    return (
      <div className='bodySection'>
        <h2>{this.props.title}</h2>
        {this.props.children}
      </div>
    );
  }
}

BodySection. defaultProps = {
	children: <React.Fragment />
};

BodySection.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element
  ])
};
=======
import React from 'react';
import PropTypes from 'prop-types';

const BodySection = (props) => (
  <div className="bodySection">
    <h2>{props.title}</h2>
    {props.children}
  </div>
)

BodySection.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node
}
>>>>>>> 3b7f4a80dcf88677b3eaaf4a7a76a9e7afc5ad6b

export default BodySection;
