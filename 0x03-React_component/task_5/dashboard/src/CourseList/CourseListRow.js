import React from 'react';
<<<<<<< HEAD
import PropTypes from 'prop-types';

function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {
  return (
    <tr>
      {isHeader ?
        textSecondCell === null ?
          <th colSpan="2">{textFirstCell}</th>
        :
          <>
            <th>{textFirstCell}</th>
            <th>{textSecondCell}</th>
          </>
      :
        <>
          <td>{textFirstCell}</td>
          <td>{textSecondCell}</td>
        </>
      }
    </tr>
  );
}

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null
};

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string,
  textSecondCell: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ])
};

export default CourseListRow;
=======

function CourseListRow(props) {
  if (props.isHeader) {
    return (
      <tr>
        {!props.textSecondCell
          ? (<th colSpan='2'>{props.textFirstCell}</th>)
          : (
            <>
              <th>{props.textFirstCell}</th>
              <th>{props.textSecondCell}</th>
            </>
            )
        }
      </tr>
    )
  }
  return (
    <>
      <td>{props.textFirstCell}</td>
      <td>{props.textSecondCell}</td>
    </>
  )
}

export default CourseListRow;

>>>>>>> 3b7f4a80dcf88677b3eaaf4a7a76a9e7afc5ad6b
