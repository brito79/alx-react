import React from 'react';
<<<<<<< HEAD
import PropType from 'prop-types';
import CourseShape from './CourseShape';
import CourseListRow from './CourseListRow';
import './CourseList.css';

function CourseList({ listCourses }) {
  return (
    <table id="CourseList" cellPadding="0" cellSpacing="0">
      <thead>
        <CourseListRow isHeader={true} textFirstCell='Available courses' />
        <CourseListRow isHeader={true} textFirstCell='Course name' textSecondCell="Credit" />
      </thead>
      <tbody>
        {
        listCourses.length == 0 ?
          <CourseListRow isHeader={false} textFirstCell='No course available yet'/>
        : null
        }
        {
          listCourses.map((val, idx) => {
            return <CourseListRow isHeader={false} textFirstCell={val.name} textSecondCell={val.credit} key={val.id}/>
          })
        }
      </tbody>
    </table>
  );
}

CourseList.defaultProps = {
  listCourses: []
};

CourseList.propType = {
  listCourses: PropType.arrayOf(CourseShape)
};

export default CourseList;
=======
import CourseListRow from './CourseListRow';
import './CourseList.css';

function CourseList() {
    return (
        <table id='CourseList'>
            <thead>
                <CourseListRow textFirstCell="Available courses" isHeader="true" />
                <CourseListRow textFirstCell="Course name" textSecondCell="Credit" isHeader="true" />
            </thead>
            <tbody>
                <CourseListRow textFirstCell="ES6" textSecondCell="60" isHeader="false" />
                <CourseListRow textFirstCell="Webpack" textSecondCell="20" isHeader="false" />
                <CourseListRow textFirstCell="React" textSecondCell="40" and isHeader="false" />
            </tbody>
        </table>
    )
}

export default CourseList;
>>>>>>> 3b7f4a80dcf88677b3eaaf4a7a76a9e7afc5ad6b
