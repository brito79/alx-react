<<<<<<< HEAD
import React, { Component } from 'react'
import BodySection from './BodySection';
import './BodySectionWithMarginBottom.css';
import PropTypes from 'prop-types';

class BodySectionWithMarginBottom extends Component {
  render() {
    return (
      <div className='bodySectionWithMargin'>
        <BodySection {...this.props}/>
      </div>
    );
  }
}

BodySectionWithMarginBottom. defaultProps = {
	children: <React.Fragment />
};

BodySectionWithMarginBottom.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element
  ])
};
=======
import React from 'react';
import BodySection from './BodySection';
import PropTypes from 'prop-types';
import './BodySectionWithMarginBottom.css';

const BodySectionWithMarginBottom = (props) => (
    <div className='bodySectionWithMargin'>
        <BodySection {...props}/>
    </div>
)

BodySectionWithMarginBottom.propTypes = {
    children: PropTypes.node
}
>>>>>>> 3b7f4a80dcf88677b3eaaf4a7a76a9e7afc5ad6b

export default BodySectionWithMarginBottom;
